/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from 'ethers';
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from '@nomiclabs/hardhat-ethers/types';

import * as Contracts from '.';

declare module 'hardhat/types/runtime' {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: 'Ownable',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: 'Coin',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Coin__factory>;
    getContractFactory(
      name: 'Greeter',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Greeter__factory>;
    getContractFactory(
      name: 'Storage',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Storage__factory>;
    getContractFactory(
      name: 'Voting',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Voting__factory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer,
    ): Promise<ethers.ContractFactory>;
  }
}
