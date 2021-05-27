/* eslint-disable no-console */
import hre from 'hardhat';

async function main() {
  const StorageContract = await hre.ethers.getContractFactory('Storage');
  const storage = await hre.upgrades.deployProxy(StorageContract, [31]);
  await storage.deployed();

  console.log('Storage deployed to:', storage.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
