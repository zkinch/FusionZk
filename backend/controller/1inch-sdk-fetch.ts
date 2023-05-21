/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  EIP712TypedData,
  FusionSDK,
  NetworkEnum,
  PrivateKeyProviderConnector,
} from '@1inch/fusion-sdk';
import { NetworkName } from '@railgun-community/shared-models';
import { entropyToMnemonic, randomBytes } from 'ethers/lib/utils';
import { ethers } from 'ethers';
import Web3 from 'web3';

interface HttpProviderConnector {
  get<T>(url: string): Promise<T>;

  post<T>(url: string, data: unknown): Promise<T>;
}

interface BlockchainProviderConnector {
  signTypedData(
    walletAddress: string,
    typedData: EIP712TypedData,
  ): Promise<string>;

  ethCall(contractAddress: string, callData: string): Promise<string>;
}

type FusionSDKConfigParams = {
  url: string;
  network: NetworkEnum;
  blockchainProvider?: BlockchainProviderConnector;
  httpProvider?: HttpProviderConnector; // by default we are using axios
};

export const oneInchSubdomain = (networkName: NetworkName): string => {
  switch (networkName) {
    case NetworkName.Ethereum:
      return 'api';
    case NetworkName.BNBChain:
      return 'bsc.api';
    case NetworkName.Polygon:
      return 'polygon.api';
    case NetworkName.Arbitrum:
      return 'arbitrum.api';
    case NetworkName.EthereumGoerli:
      return 'goerli.api';
    case NetworkName.PolygonMumbai:
      return 'mumbai.api';
    case NetworkName.ArbitrumGoerli:
    case NetworkName.Railgun:
    case NetworkName.Hardhat:
    case NetworkName.EthereumRopsten_DEPRECATED:
      throw new Error(`No OneInch API URL for chain ${networkName}`);
  }
};

export const create1inchSDK = () => {
  const nodeUrl =
    'https://polygon-mumbai.g.alchemy.com/v2/6UhsPRKR79e4fSzMo590glSbly-BYewd';
  const mnemonic = entropyToMnemonic(randomBytes(16));

  const wallet = ethers.Wallet.fromMnemonic(mnemonic);

  const makerPrivateKey = wallet.privateKey;

  const blockchainProvider = new PrivateKeyProviderConnector(
    makerPrivateKey,
    new Web3(nodeUrl),
  );

  const sdk = new FusionSDK({
    url: 'https://fusion.1inch.io',
    network: 137,
    blockchainProvider,
  });

  return sdk;
};


