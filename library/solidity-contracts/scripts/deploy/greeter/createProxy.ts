/* eslint-disable no-console */
import hre from 'hardhat';

async function main() {
  const Greeter = await hre.ethers.getContractFactory('Greeter');
  const greeter = await hre.upgrades.deployProxy(Greeter, ['Hello, Hardhat!']);
  await greeter.deployed();

  console.log('Greeter deployed to:', greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
