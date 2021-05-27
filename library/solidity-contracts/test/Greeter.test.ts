import { contract } from '@openzeppelin/test-environment';
import { artifacts } from 'hardhat';
import { expect } from 'chai';
import { Greeter as GreeterType } from '../typechain';

interface Contract {
  new: (value: string) => Promise<GreeterType>;
}

describe('Greeter', () => {
  const GreeterArtifact = artifacts.readArtifactSync('Greeter');
  const Greeter = contract.fromABI(
    GreeterArtifact.abi,
    GreeterArtifact.bytecode,
  ) as Contract;

  it("should return the new greeting once it's changed", async () => {
    const greeter = await Greeter.new('Hello, world!');
    expect(await greeter.greet()).to.equal('Hello, world!');
    await greeter.setGreeting('Hola, mundo!');
    expect(await greeter.greet()).to.equal('Hola, mundo!');
  });
});
