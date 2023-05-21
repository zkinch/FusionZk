import { BigNumber } from '@ethersproject/bignumber';
import {
  StepConfig,
  StepInput,
  RecipeERC20Info,
  StepOutputERC20Amount,
  UnvalidatedStepOutput,
  QuoteParams,
  RecipeERC20AmountRecipient,
  OrderSwapInfo,
} from '../../../models/export-models';
import { compareERC20Info, isApprovedForSpender } from '../../../utils/token';
import { Step } from '../../step';

export class OneInchOrderStep extends Step {
  readonly config: StepConfig = {
    name: '1inch Fusion Swap',
    description: 'Swaps two ERC20 tokens using 1inch DEX Aggregator.',
    hasNonDeterministicOutput: true,
  };

  private readonly order: OrderSwapInfo;
  private readonly sellERC20Info: RecipeERC20Info;

  constructor(order: OrderSwapInfo, sellERC20Info: RecipeERC20Info) {
    super();
    this.order = order;
    this.sellERC20Info = sellERC20Info;
  }

  protected async getStepOutput(
    input: StepInput,
  ): Promise<UnvalidatedStepOutput> {
    const {
      orderInfo,
      populatedTransaction,
      spender,
      buyERC20Amount,
      minimumBuyAmount,
    } = this.order;

    const { erc20Amounts } = input;

    const sellERC20Amount = BigNumber.from(orderInfo.order.makingAmount);
    const { erc20AmountForStep, unusedERC20Amounts } =
      this.getValidInputERC20Amount(
        erc20Amounts,
        erc20Amount =>
          compareERC20Info(erc20Amount, this.sellERC20Info) &&
          isApprovedForSpender(erc20Amount, spender),
        sellERC20Amount,
      );

    const sellERC20AmountRecipient: RecipeERC20AmountRecipient = {
      ...this.sellERC20Info,
      amount: erc20AmountForStep.expectedBalance,
      recipient: '0x Exchange',
    };

    const outputBuyERC20Amount: StepOutputERC20Amount = {
      tokenAddress: orderInfo.order.makerAsset,
      decimals: buyERC20Amount.decimals,
      isBaseToken: buyERC20Amount.isBaseToken,
      expectedBalance: buyERC20Amount.amount,
      minBalance: minimumBuyAmount,
      approvedSpender: orderInfo.order.allowedSender,
    };

    return {
      populatedTransactions: [populatedTransaction],
      spentERC20Amounts: [sellERC20AmountRecipient],
      outputERC20Amounts: [outputBuyERC20Amount, ...unusedERC20Amounts],
      outputNFTs: input.nfts,
    };
  }
}
