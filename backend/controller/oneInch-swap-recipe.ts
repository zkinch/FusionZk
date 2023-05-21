import { ApproveERC20SpenderStep } from '../../steps/token/erc20/approve-erc20-spender-step';
import { Step } from '../../steps/step';
import { OneInchQuote } from './1inch-sdk-quote';
import { ZeroXSwapStep } from '../../steps/swap/zero-x/zero-x-swap-step';
import {
  RecipeConfig,
  RecipeERC20Amount,
  RecipeERC20Info,
  StepInput,
  SwapQuoteData,
  SwapQuoteParams,
} from '../../models/export-models';
import { SwapRecipe } from './swap-recipe';
import { NetworkName } from '@railgun-community/shared-models';
import { findFirstInputERC20Amount } from '../../utils';
import { OrderInfo } from '@1inch/fusion-sdk';

export class oneInchSwap extends SwapRecipe {
  readonly config: RecipeConfig = {
    name: '1inch Fusion Swap',
    description: 'Swaps two ERC20 tokens using 1inch DEX Aggregator.',
  };

  protected readonly sellERC20Info: RecipeERC20Info;
  protected readonly buyERC20Info: RecipeERC20Info;


  constructor(
    sellERC20Info: RecipeERC20Info,
    buyERC20Info: RecipeERC20Info,
  ) {
    super();
    this.sellERC20Info = sellERC20Info;
    this.buyERC20Info = buyERC20Info;
  }

  protected supportsNetwork(networkName: NetworkName): boolean {
    return OneInchQuote.supportsNetwork(networkName);
  }

  async GetSwapOrder(
    fromTokenAddress,
    toTokenAddress,
    amount
  ): Promise<OrderInfo> {
    const orderParams: OrderParams = {
        fromTokenAddress,
        toTokenAddress,
        amount,
    };
    return OneInchQuote.GetSwapOrder(orderParams);
  }

  protected async getInternalSteps(
    firstInternalStepInput: StepInput,
  ): Promise<Step[]> {
    const { networkName } = firstInternalStepInput;
    const sellERC20Amount = findFirstInputERC20Amount(
      firstInternalStepInput.erc20Amounts,
      this.sellERC20Info,
    );
    this.quote = await this.getSwapQuote(networkName, sellERC20Amount);

    return [
      new ApproveERC20SpenderStep(this.quote.spender, sellERC20Amount),
      new ZeroXSwapStep(this.quote, this.sellERC20Info),
    ];
  }
}
