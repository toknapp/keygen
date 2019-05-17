#!/bin/bash

OLDDIR=`pwd`
DIR=`dirname "$0"`

cd "$DIR"

if [ -z "`command -v node`" ]; then
  echo "Error: Unable to run ''node''. Exiting."
  exit 1
fi

if [ -z "`command -v npm`" ]; then
  echo "Error: Unable to run ''npm''. Exiting."
  exit 1
fi

if [ ! -f ./node_modules/libsodium/package.json ]; then
  echo "###########################"
  echo "Installing Node.js modules."
  echo "###########################"
  npm install
fi

echo "#######################################################"
echo "Generating Upvest Recovery Kit private-public key pair."
echo "#######################################################"
node index.js
