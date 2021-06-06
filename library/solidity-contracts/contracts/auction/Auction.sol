// SPDX-License-Identifier: ISC

pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

import "./AuctionLibrary.sol";

contract Auction is OwnableUpgradeable {
    using SafeMath for uint256;

    bytes32 public id;

    Types.Good public good;

    Types.AuctionType public auctionType;

    uint256 public startDate;

    uint256 public endDate;

    uint256 public createdAt;

    uint256 public updatedAt;

    uint256 public canceledAt;

    event AuctionCompleted(bytes32 id, Types.Good good);

    function initialize(Types.NewAuction memory auction) public initializer {
        __Ownable_init();

        id = keccak256(abi.encode(auction));
        good = auction.good;
        auctionType = auction.auctionType;
        startDate = auction.startDate;
        endDate = auction.endDate;
        createdAt = block.timestamp.mul(1000);
    }
}
