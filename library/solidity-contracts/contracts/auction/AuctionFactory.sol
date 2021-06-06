// SPDX-License-Identifier: ISC

pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

import "./Auction.sol";
import "./AuctionLibrary.sol";

contract AuctionFactory is Initializable {
    mapping(address => Auction[]) public ownerAuctions;

    event AuctionCreated(address indexed owner, address contractAddress);

    function createAuction(Types.NewAuction memory newAuction)
        public
        returns (Auction)
    {
        Auction auction = new Auction();
        auction.initialize(newAuction);

        ownerAuctions[msg.sender].push(auction);
        emit AuctionCreated(msg.sender, address(auction));

        return auction;
    }

    function getAuctions(address owner) public view returns (Auction[] memory) {
        require(owner != address(0), "Zero address can't have auctions");
        return ownerAuctions[owner];
    }
}
