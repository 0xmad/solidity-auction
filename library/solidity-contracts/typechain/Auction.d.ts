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

interface AuctionInterface extends ethers.utils.Interface {
  functions: {
    "auctionType()": FunctionFragment;
    "c_0x4c3b74ab(bytes32)": FunctionFragment;
    "canceledAt()": FunctionFragment;
    "createdAt()": FunctionFragment;
    "endDate()": FunctionFragment;
    "good()": FunctionFragment;
    "id()": FunctionFragment;
    "initialize(tuple)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "startDate()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updatedAt()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "auctionType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "c_0x4c3b74ab",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "canceledAt",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "createdAt", values?: undefined): string;
  encodeFunctionData(functionFragment: "endDate", values?: undefined): string;
  encodeFunctionData(functionFragment: "good", values?: undefined): string;
  encodeFunctionData(functionFragment: "id", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      {
        startDate: BigNumberish;
        endDate: BigNumberish;
        auctionType: BigNumberish;
        good: {
          name: string;
          description: string;
          startPrice: BigNumberish;
          category: BigNumberish;
        };
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "startDate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "updatedAt", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "auctionType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_0x4c3b74ab",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "canceledAt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createdAt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endDate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "good", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "id", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startDate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updatedAt", data: BytesLike): Result;

  events: {
    "AuctionCompleted(bytes32,tuple)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuctionCompleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class Auction extends BaseContract {
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

  interface: AuctionInterface;

  functions: {
    auctionType(overrides?: CallOverrides): Promise<[number]>;

    c_0x4c3b74ab(
      c__0x4c3b74ab: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    canceledAt(overrides?: CallOverrides): Promise<[BigNumber]>;

    createdAt(overrides?: CallOverrides): Promise<[BigNumber]>;

    endDate(overrides?: CallOverrides): Promise<[BigNumber]>;

    good(
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, number] & {
        name: string;
        description: string;
        startPrice: BigNumber;
        category: number;
      }
    >;

    id(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      auction: {
        startDate: BigNumberish;
        endDate: BigNumberish;
        auctionType: BigNumberish;
        good: {
          name: string;
          description: string;
          startPrice: BigNumberish;
          category: BigNumberish;
        };
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startDate(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatedAt(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  auctionType(overrides?: CallOverrides): Promise<number>;

  c_0x4c3b74ab(
    c__0x4c3b74ab: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  canceledAt(overrides?: CallOverrides): Promise<BigNumber>;

  createdAt(overrides?: CallOverrides): Promise<BigNumber>;

  endDate(overrides?: CallOverrides): Promise<BigNumber>;

  good(
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, number] & {
      name: string;
      description: string;
      startPrice: BigNumber;
      category: number;
    }
  >;

  id(overrides?: CallOverrides): Promise<string>;

  initialize(
    auction: {
      startDate: BigNumberish;
      endDate: BigNumberish;
      auctionType: BigNumberish;
      good: {
        name: string;
        description: string;
        startPrice: BigNumberish;
        category: BigNumberish;
      };
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startDate(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatedAt(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    auctionType(overrides?: CallOverrides): Promise<number>;

    c_0x4c3b74ab(
      c__0x4c3b74ab: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    canceledAt(overrides?: CallOverrides): Promise<BigNumber>;

    createdAt(overrides?: CallOverrides): Promise<BigNumber>;

    endDate(overrides?: CallOverrides): Promise<BigNumber>;

    good(
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, number] & {
        name: string;
        description: string;
        startPrice: BigNumber;
        category: number;
      }
    >;

    id(overrides?: CallOverrides): Promise<string>;

    initialize(
      auction: {
        startDate: BigNumberish;
        endDate: BigNumberish;
        auctionType: BigNumberish;
        good: {
          name: string;
          description: string;
          startPrice: BigNumberish;
          category: BigNumberish;
        };
      },
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    startDate(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updatedAt(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    AuctionCompleted(
      id?: null,
      good?: null
    ): TypedEventFilter<
      [
        string,
        [string, string, BigNumber, number] & {
          name: string;
          description: string;
          startPrice: BigNumber;
          category: number;
        }
      ],
      {
        id: string;
        good: [string, string, BigNumber, number] & {
          name: string;
          description: string;
          startPrice: BigNumber;
          category: number;
        };
      }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    auctionType(overrides?: CallOverrides): Promise<BigNumber>;

    c_0x4c3b74ab(
      c__0x4c3b74ab: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canceledAt(overrides?: CallOverrides): Promise<BigNumber>;

    createdAt(overrides?: CallOverrides): Promise<BigNumber>;

    endDate(overrides?: CallOverrides): Promise<BigNumber>;

    good(overrides?: CallOverrides): Promise<BigNumber>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      auction: {
        startDate: BigNumberish;
        endDate: BigNumberish;
        auctionType: BigNumberish;
        good: {
          name: string;
          description: string;
          startPrice: BigNumberish;
          category: BigNumberish;
        };
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startDate(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatedAt(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    auctionType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    c_0x4c3b74ab(
      c__0x4c3b74ab: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canceledAt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createdAt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    endDate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    good(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    id(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      auction: {
        startDate: BigNumberish;
        endDate: BigNumberish;
        auctionType: BigNumberish;
        good: {
          name: string;
          description: string;
          startPrice: BigNumberish;
          category: BigNumberish;
        };
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startDate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatedAt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
