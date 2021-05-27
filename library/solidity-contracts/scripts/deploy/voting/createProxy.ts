/* eslint-disable no-console */
import hre from 'hardhat';

async function main() {
  const Voting = await hre.ethers.getContractFactory('Voting');
  const voting = await hre.upgrades.deployProxy(Voting, [31]);
  await voting.deployed();

  console.log('Voting deployed to:', voting.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
