/* eslint-disable no-console */
import hre from 'hardhat';

async function main() {
  const Auction = await hre.ethers.getContractFactory('AuctionFactory');
  const auction = await hre.upgrades.deployProxy(Auction);
  await auction.deployed();

  console.log('AuctionFactory deployed to:', auction.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
