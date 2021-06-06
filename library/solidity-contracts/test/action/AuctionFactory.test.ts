import {
  expectEvent,
  expectRevert,
  constants,
} from '@openzeppelin/test-helpers';
import { contract, defaultSender } from '@openzeppelin/test-environment';
import { artifacts } from 'hardhat';

import { expect } from 'chai';
import { AuctionFactory } from '../../typechain';
import { NewAuction, Category, Type } from './types';

interface Contract {
  new: () => Promise<AuctionFactory>;
  initialize: (newAuction: NewAuction) => Promise<AuctionFactory>;
}

describe('AuctionFactory', () => {
  const AuctionFactoryArtifact = artifacts.readArtifactSync('AuctionFactory');
  const AuctionFactoryContract = contract.fromABI(
    AuctionFactoryArtifact.abi,
    AuctionFactoryArtifact.bytecode,
  ) as Contract;

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const newAuction: NewAuction = {
    good: {
      name: 'Item',
      description: 'Description',
      startPrice: 1,
      category: Category.ART,
    },
    auctionType: Type.CLASSIC,
    startDate: +today,
    endDate: +tomorrow,
  };

  const createAuction = async (
    auctionFactory: AuctionFactory,
    index: number,
  ): Promise<void> => {
    const receipt = await auctionFactory.createAuction(newAuction);
    const actual = await auctionFactory.ownerAuctions(defaultSender, index);
    expectEvent(receipt, 'AuctionCreated', {
      owner: defaultSender,
      contractAddress: actual,
    });
  };

  it('should create auction and save it to map', async () => {
    const auctionFactory: AuctionFactory = await AuctionFactoryContract.new();
    await createAuction(auctionFactory, 0);
  });

  it('should throw an error if try to get auctions for zero address', async () => {
    const auctionFactory: AuctionFactory = await AuctionFactoryContract.new();
    await expectRevert(
      auctionFactory.getAuctions(constants.ZERO_ADDRESS),
      `Zero address can't have auctions`,
    );
  });

  it('should get owner auctions', async () => {
    const auctionFactory: AuctionFactory = await AuctionFactoryContract.new();
    await createAuction(auctionFactory, 0);
    await createAuction(auctionFactory, 1);

    const auctions = await auctionFactory.getAuctions(defaultSender);
    expect(auctions.length).to.equal(2);
  });
});
