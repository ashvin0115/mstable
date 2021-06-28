/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface CRPFactoryInterface extends ethers.utils.Interface {
  functions: {
    "newCrp(address,tuple,tuple)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "newCrp",
    values: [
      string,
      {
        poolTokenSymbol: string;
        poolTokenName: string;
        constituentTokens: string[];
        tokenBalances: BigNumberish[];
        tokenWeights: BigNumberish[];
        swapFee: BigNumberish;
      },
      {
        canPauseSwapping: boolean;
        canChangeSwapFee: boolean;
        canChangeWeights: boolean;
        canAddRemoveTokens: boolean;
        canWhitelistLPs: boolean;
        canChangeCap: boolean;
      }
    ]
  ): string;

  decodeFunctionResult(functionFragment: "newCrp", data: BytesLike): Result;

  events: {};
}

export class CRPFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CRPFactoryInterface;

  functions: {
    newCrp(
      factoryAddress: string,
      poolParams: {
        poolTokenSymbol: string;
        poolTokenName: string;
        constituentTokens: string[];
        tokenBalances: BigNumberish[];
        tokenWeights: BigNumberish[];
        swapFee: BigNumberish;
      },
      rights: {
        canPauseSwapping: boolean;
        canChangeSwapFee: boolean;
        canChangeWeights: boolean;
        canAddRemoveTokens: boolean;
        canWhitelistLPs: boolean;
        canChangeCap: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  newCrp(
    factoryAddress: string,
    poolParams: {
      poolTokenSymbol: string;
      poolTokenName: string;
      constituentTokens: string[];
      tokenBalances: BigNumberish[];
      tokenWeights: BigNumberish[];
      swapFee: BigNumberish;
    },
    rights: {
      canPauseSwapping: boolean;
      canChangeSwapFee: boolean;
      canChangeWeights: boolean;
      canAddRemoveTokens: boolean;
      canWhitelistLPs: boolean;
      canChangeCap: boolean;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    newCrp(
      factoryAddress: string,
      poolParams: {
        poolTokenSymbol: string;
        poolTokenName: string;
        constituentTokens: string[];
        tokenBalances: BigNumberish[];
        tokenWeights: BigNumberish[];
        swapFee: BigNumberish;
      },
      rights: {
        canPauseSwapping: boolean;
        canChangeSwapFee: boolean;
        canChangeWeights: boolean;
        canAddRemoveTokens: boolean;
        canWhitelistLPs: boolean;
        canChangeCap: boolean;
      },
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    newCrp(
      factoryAddress: string,
      poolParams: {
        poolTokenSymbol: string;
        poolTokenName: string;
        constituentTokens: string[];
        tokenBalances: BigNumberish[];
        tokenWeights: BigNumberish[];
        swapFee: BigNumberish;
      },
      rights: {
        canPauseSwapping: boolean;
        canChangeSwapFee: boolean;
        canChangeWeights: boolean;
        canAddRemoveTokens: boolean;
        canWhitelistLPs: boolean;
        canChangeCap: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    newCrp(
      factoryAddress: string,
      poolParams: {
        poolTokenSymbol: string;
        poolTokenName: string;
        constituentTokens: string[];
        tokenBalances: BigNumberish[];
        tokenWeights: BigNumberish[];
        swapFee: BigNumberish;
      },
      rights: {
        canPauseSwapping: boolean;
        canChangeSwapFee: boolean;
        canChangeWeights: boolean;
        canAddRemoveTokens: boolean;
        canWhitelistLPs: boolean;
        canChangeCap: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
