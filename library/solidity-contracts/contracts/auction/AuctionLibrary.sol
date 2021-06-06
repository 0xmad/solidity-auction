// SPDX-License-Identifier: ISC

pragma solidity ^0.8.4;

library Types {
    struct Good {
        string name;
        string description;
        uint256 startPrice;
        Category category;
    }

    struct NewAuction {
        uint256 startDate;
        uint256 endDate;
        AuctionType auctionType;
        Good good;
    }

    enum Category { SERVICES, ART }

    enum AuctionType { CLASSIC, BLIND }
}
