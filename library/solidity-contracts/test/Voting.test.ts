import { expectRevert, constants } from '@openzeppelin/test-helpers';
import {
  contract,
  accounts,
  defaultSender,
} from '@openzeppelin/test-environment';
import { artifacts } from 'hardhat';
import { ethers } from 'ethers';
import { expect } from 'chai';
import { Voting as VotingType } from '../typechain';

interface Contract {
  new: (proposals: string[]) => Promise<VotingType>;
}

describe('Voting', () => {
  let voting: VotingType;

  const VotingArtifact = artifacts.readArtifactSync('Voting');
  const Voting = contract.fromABI(
    VotingArtifact.abi,
    VotingArtifact.bytecode,
  ) as Contract;
  const [user, other] = accounts;
  const { ZERO_ADDRESS } = constants as { ZERO_ADDRESS: string };

  before(async () => {
    const proposals = [ethers.utils.formatBytes32String('"Johny" The Monkey')];
    voting = await Voting.new(proposals);
  });

  it('should not create contract with empty proposals', async () => {
    await expectRevert(Voting.new([]), 'Empty proposals');
  });

  it('should create contract properly', async () => {
    const chairperson = await voting.chairperson();
    const voter = await voting.voters(chairperson);

    expect(chairperson).to.equal(defaultSender);
    expect(voter.voted).to.equal(false);
    expect(voter.vote.toString()).to.equal('0');
    expect(voter.weight.toString()).to.equal('1');
  });

  it('should give right to vote', async () => {
    await voting.giveRightToVote(other);
    const voter = await voting.voters(other);

    expect(voter.voted).to.equal(false);
    expect(voter.vote.toString()).to.equal('0');
    expect(voter.weight.toString()).to.equal('1');
  });

  it('should throw error on giving right to vote if voter has already been added', async () => {
    await voting.giveRightToVote(user);
    await expectRevert(
      voting.giveRightToVote(user),
      'The voter has already been added',
    );
  });

  it('should throw error on zero address', async () => {
    await expectRevert(
      voting.giveRightToVote(ZERO_ADDRESS),
      'Zero address is not allowed',
    );
  });
});
