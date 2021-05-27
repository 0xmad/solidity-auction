// SPDX-License-Identifier: ISC

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";

/// @title Voting contract
/// @author Errmac
/// @notice You can use this contract to launch simple voting process
contract Voting is Ownable {
    /// @notice Voter struct
    /// @param weight Voter weight
    /// @param voted Has voter already votted?
    /// @param vote Vote option
    struct Voter {
        uint256 weight;
        bool voted;
        uint256 vote;
    }

    /// @notice Voting proposal struct
    /// @param name Proposal name
    /// @param count Vote count
    struct Proposal {
        bytes32 name;
        uint256 count;
    }

    /// @notice Contract owner
    address public chairperson;

    /// @notice Map address to voter struct
    mapping(address => Voter) public voters;

    /// @notice Voting proposals
    Proposal[] public proposals;

    /// @notice Constructor with initial proposals
    /// @dev Can't create contract with empty proposals
    /// @param _proposals Initial proposals for voting
    constructor(bytes32[] memory _proposals) public {
        require(_proposals.length > 0, "Empty proposals");
        chairperson = msg.sender;
        voters[chairperson].weight = 1;

        for (uint256 i = 0; i < _proposals.length; i += 1) {
            proposals.push(Proposal({name: _proposals[i], count: 0}));
        }
    }

    /// @notice Give right to vote for user
    /// @dev Voter can't be zero address and voter can't be added twice
    /// @param voter Voter address
    function giveRightToVote(address voter) public onlyOwner {
        require(voter != address(0), "Zero address is not allowed");
        require(voters[voter].weight == 0, "The voter has already been added");

        voters[voter].weight = 1;
    }
}
