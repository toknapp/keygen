const { getBoxKeyPair } = require('./crypto.js');

async function main() {
  const keyPair = await getBoxKeyPair();

  const output = `
--------------------------------------------------------------------------------

YOUR PRIVATE KEY FOR DECRYPTING UPVEST RECOVERY KITS:

${keyPair.privateKey}

PLEASE STORE THIS PRIVATE KEY SOMEWHERE SAFE!

ALSO CONSIDER BUSINESS CONTINUITY, IN OTHER WORDS MAKE SURE DECRYPTION WITH THIS
PRIVATE KEY WILL BE MADE POSSIBLE FOR YOUR CLIENTS IN THE (HOPEFULLY UNLIKELY)
EVENT THAT YOUR BUSINESS BECOMES INCAPABLE OF PERFORMING THE DECRYPTION ITSELF. 

--------------------------------------------------------------------------------

THE PUBLIC KEY TO ENCRYPT UPVEST RECOVERY KITS WITH:

${keyPair.publicKey}

PLEASE SEND **ONLY** THIS PUBLIC KEY TO UPVEST.

--------------------------------------------------------------------------------
`;

  console.log(output);
}

main();
