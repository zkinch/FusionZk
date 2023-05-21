import {
  create1inchSDK,
  oneInchSubdomain,
} from './1inch-sdk-fetch';
import { NetworkName } from '@railgun-community/shared-models';
import { OrderInfo } from '@1inch/fusion-sdk';
import { OrderNonce } from '@1inch/fusion-sdk/nonce-manager/types';
import { generateWallet } from '../../frontend/src/components/WalletRailGun';

 type PaginationParams = {
  page?: number; // default is 1
  limit?: number; // default is 2, min is 1, max is 500
};

 enum PresetEnum {
  fast = 'fast',
  medium = 'medium',
  slow = 'slow',
}

 type OrderParams = {
  fromTokenAddress: string;
  toTokenAddress: string;
  amount: string;
  walletAddress: string;
  permit?: string; // a permit (EIP-2612) call data, user approval sign
  receiver?: string; // address
  preset?: PresetEnum;
  nonce?: OrderNonce | string | number; // allows to batch cancel orders. by default: not used
  fee?: TakingFeeInfo;
};

export type QuoteParams = {
  fromTokenAddress: string;
  toTokenAddress: string;
  amount: string;
  permit?: string; // a permit (EIP-2612) call data, user approval sign
  takingFeeBps?: number; // 100 == 1%
};

export type TakingFeeInfo = {
  takingFeeBps: number; // 100 == 1%
  takingFeeReceiver: string;
};

export type GetSwapOrder = (quoteParams: OrderParams) => Promise<OrderInfo>;

export class OneInchQuote {
  static supportsNetwork = (networkName: NetworkName) => {
    try {
      oneInchSubdomain(networkName);
      return true;
    } catch {
      return false;
    }
  };

  static GetSwapOrder: GetSwapOrder = async ({
    fromTokenAddress,
    toTokenAddress,
    amount,
  }: OrderParams): Promise<OrderInfo> => {
    const sdk = create1inchSDK();

    const { walletInfo, makerPrivateKey, makerAddress} = await generateWallet();
    const params = {
      fromTokenAddress :fromTokenAddress ,
      toTokenAddress : toTokenAddress,
      amount : amount,
      makerAddress,
      fee: {
        takingFeeBps: 100, // 1% as we use bps format, 1% is equal to 100bps
        takingFeeReceiver: '0x0000000000000000000000000000000000000000', //  fee receiver address
      },
    };

    const info = await sdk.placeOrder(params);

    return info;
  };

}
