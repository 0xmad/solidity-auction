/* eslint-disable no-console */
import hre from 'hardhat';

async function main() {
  const Coin = await hre.ethers.getContractFactory('Coin');
  const coin = await hre.upgrades.deployProxy(Coin);
  await coin.deployed();

  console.log('Coin deployed to:', coin.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
