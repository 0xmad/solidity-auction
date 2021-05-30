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

interface StorageInterface extends ethers.utils.Interface {
  functions: {
    "c_0x353ef267(bytes32)": FunctionFragment;
    "get()": FunctionFragment;
    "set(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "c_0x353ef267",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "get", values?: undefined): string;
  encodeFunctionData(functionFragment: "set", values: [BigNumberish]): string;

  decodeFunctionResult(
    functionFragment: "c_0x353ef267",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;

  events: {};
}

export class Storage extends BaseContract {
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

  interface: StorageInterface;

  functions: {
    c_0x353ef267(
      c__0x353ef267: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    get(overrides?: CallOverrides): Promise<[BigNumber]>;

    set(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  c_0x353ef267(
    c__0x353ef267: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  get(overrides?: CallOverrides): Promise<BigNumber>;

  set(
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    c_0x353ef267(
      c__0x353ef267: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    get(overrides?: CallOverrides): Promise<BigNumber>;

    set(value: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    c_0x353ef267(
      c__0x353ef267: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get(overrides?: CallOverrides): Promise<BigNumber>;

    set(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    c_0x353ef267(
      c__0x353ef267: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    get(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    set(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
