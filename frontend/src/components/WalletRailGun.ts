//Porbleme of npm package, this code will throw error when npm start
// import {
//   createRailgunWallet,
// } from "@railgun-community/quickstart";
// import { ethers } from 'ethers';
// import { entropyToMnemonic, randomBytes } from 'ethers/lib/utils';

// const mnemonic = entropyToMnemonic(randomBytes(16));

// export const encryptionKey = "0101010101010101010101010101010101010101010101010101010101010101";

// export const generateWallet = async () => {
//     const mnemonic = entropyToMnemonic(randomBytes(16));
//     const railgunWallet = await createRailgunWallet(
//         encryptionKey,
//         mnemonic,
//         undefined
//     );
//     const wallet = ethers.Wallet.fromMnemonic(mnemonic);

//     const makerPrivateKey = wallet.privateKey;
//     const makerAddress = wallet.address;
//     console.log("wallet created!");
  
//     if (!railgunWallet.railgunWalletInfo) {
//       console.log("error: ", railgunWallet.error);
//       throw new Error("error creating wallet");
//     } else {
//         console.log(railgunWallet.railgunWalletInfo);
//         const walletInfo = await railgunWallet.railgunWalletInfo;
//       return {walletInfo,makerPrivateKey,makerAddress};
//     }
// };

