import { contract, defaultSender } from '@openzeppelin/test-environment';
import { artifacts } from 'hardhat';
import { expect } from 'chai';
import { Auction as AuctionType } from '../typechain';

interface NewAuction {
  good: {
    name: string;
    description: string;
    startPrice: number;
    category: Category;
  };
  auctionType: Type;
  startDate: number;
  endDate: number;
}

enum Category {
  SERVICES,
  ART,
}

enum Type {
  CLASSIC,
  BLIND,
}

interface Contract {
  new: () => Promise<AuctionType>;
  initialize: (newAuction: NewAuction) => Promise<AuctionType>;
}

describe('Auction', () => {
  const AuctionArtifact = artifacts.readArtifactSync('Auction');
  const AuctionContract = contract.fromABI(
    AuctionArtifact.abi,
    AuctionArtifact.bytecode,
  ) as Contract;

  it('should create contract', async () => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const newAuction = {
      good: {
        name: 'App development',
        description: 'Top quality application development',
        startPrice: 1,
        category: Category.SERVICES,
      },
      auctionType: Type.CLASSIC,
      startDate: +today,
      endDate: +tomorrow,
    };

    const auction = await AuctionContract.new();
    await auction.initialize(newAuction);
    expect(await auction.id()).not.to.equal(null);
    expect(await auction.owner()).to.equal(defaultSender);
    expect((await auction.auctionType()).toString()).to.equal('0');

    const good = await auction.good();
    expect(good.startPrice.toString()).to.equal('1');
    expect(good.category.toString()).to.equal('0');
    expect(good.description).to.equal(newAuction.good.description);
    expect(good.name).to.equal(newAuction.good.name);
  });
});
