import { contract } from '@openzeppelin/test-environment';
import { artifacts } from 'hardhat';
import { expect } from 'chai';
import { Storage as StorageType } from '../typechain';

interface Contract {
  new: (value: number) => Promise<StorageType>;
}

describe('Storage', () => {
  let storage: StorageType;

  const StorageArtifact = artifacts.readArtifactSync('Storage');
  const StorageContract = contract.fromABI(
    StorageArtifact.abi,
    StorageArtifact.bytecode,
  ) as Contract;

  before(async () => {
    storage = await StorageContract.new(31);
  });

  it('should create contract with default value', async () => {
    const value = await storage.get();
    expect(value.toString()).to.equal('31');
  });

  it('should set contract value', async () => {
    await storage.set(10);
    const value = await storage.get();
    expect(value.toString()).to.equal('10');
  });
});
