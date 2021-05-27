import {
  expectRevert,
  expectEvent,
  constants,
} from '@openzeppelin/test-helpers';
import {
  contract,
  defaultSender,
  accounts,
} from '@openzeppelin/test-environment';
import { artifacts } from 'hardhat';
import { expect } from 'chai';
import { Coin as CoinType } from '../typechain';

interface Contract {
  new: () => Promise<CoinType>;
}

describe('Coin', () => {
  let coin: CoinType;

  const CoinArtifact = artifacts.readArtifactSync('Coin');
  const Coin = contract.fromABI(
    CoinArtifact.abi,
    CoinArtifact.bytecode,
  ) as Contract;
  const [user] = accounts;

  before(async () => {
    coin = await Coin.new();
  });

  it('should create contract properly', async () => {
    expect(await coin.owner()).to.equal(defaultSender);
  });

  it('should mint new coins', async () => {
    const initialBalance = await coin.balances(defaultSender);
    expect(initialBalance.toString()).to.equal('0');

    await coin.mint(defaultSender, 100);
    const actualBalance = await coin.balances(defaultSender);
    expect(actualBalance.toString()).to.equal('100');
  });

  it('should throw error if non-owner user tries to mint', async () => {
    await expectRevert(
      coin.mint(user, 100, { from: user }),
      'Ownable: caller is not the owner',
    );
  });

  it('should throw error if there is no enough funds', async () => {
    await expectRevert(
      coin.send(user, 9000),
      'Not enough funds -- Reason given: Not enough funds.',
    );
  });

  it('should throw error if owner tries to mint more than 1e10 coins', async () => {
    await expectRevert(
      coin.mint(defaultSender, 10 ** 10 + 1),
      'Amount is too large -- Reason given: Amount is too large.',
    );
  });

  it('should throw error if minting to zero address', async () => {
    await expectRevert(
      coin.mint(constants.ZERO_ADDRESS, 100),
      'Zero address is not allowed -- Reason given: Zero address is not allowed.',
    );
  });

  it('should throw error if sending to zero address', async () => {
    await expectRevert(
      coin.send(constants.ZERO_ADDRESS, 100),
      'Zero address is not allowed -- Reason given: Zero address is not allowed.',
    );
  });

  it('should send coins to user', async () => {
    const coinContract = await Coin.new();
    await coinContract.mint(defaultSender, 100);

    const ownerBalance = await coinContract.balances(defaultSender);
    const userBalance = await coinContract.balances(user);
    expect(ownerBalance.toString()).to.equal('100');
    expect(userBalance.toString()).to.equal('0');

    const receipt = await coinContract.send(user, 100);

    const actualOwnerBalance = await coinContract.balances(defaultSender);
    const actualUserBalance = await coinContract.balances(user);
    expect(actualOwnerBalance.toString()).to.equal('0');
    expect(actualUserBalance.toString()).to.equal('100');

    expectEvent(receipt, 'Send');
  });
});
