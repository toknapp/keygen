const _sodium = require('libsodium-wrappers');

const getSodium = async () => {
  await _sodium.ready;
  return _sodium;
};

const getHelpers = sodium => {
  return {
    toHex: sodium.to_hex,
    toString: sodium.to_string,
    fromString: sodium.from_string,
    toB64: bytes => sodium.to_base64(bytes, sodium.base64_variants.ORIGINAL),
    fromB64: b64 => sodium.from_base64(b64, sodium.base64_variants.ORIGINAL),
  }
}

const getBoxKeyPair = async () => {
  const sodium = await getSodium();
  const { toB64 } = getHelpers(sodium);
  const { privateKey, publicKey } = sodium.crypto_box_keypair();
  return {
    privateKey: toB64(privateKey),
    publicKey: toB64(publicKey),
  };
};

module.exports = {
  getBoxKeyPair,
};
