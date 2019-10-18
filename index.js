const { getBoxKeyPair } = require('./crypto.js');

async function main() {
  const keyPair = await getBoxKeyPair();

  const output = `
--------------------------------------------------------------------------------

YOUR RECOVERY KIT DECRYPTION KEY:

${keyPair.privateKey}

PLEASE STORE THIS DECRYPTION KEY SOMEWHERE SAFE!

ALSO CONSIDER BUSINESS CONTINUITY, IN OTHER WORD, MAKE SURE DECRYPTION WITH
THIS RECOVERY KIT DECRYPTION KEY WILL BE MADE POSSIBLE FOR YOUR CLIENTS IN THE
(HOPEFULLY UNLIKELY) EVENT THAT YOUR BUSINESS BECOMES INCAPABLE OF PERFORMING
THE DECRYPTION ITSELF.


--------------------------------------------------------------------------------

THE RECOVERY KIT ENCRYPTION KEY:

${keyPair.publicKey}

PLEASE SEND **ONLY** THIS ENCRYPTION KEY TO UPVEST.

--------------------------------------------------------------------------------
`;

  console.log(output);
}

main();
