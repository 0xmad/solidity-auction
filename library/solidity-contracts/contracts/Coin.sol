// SPDX-License-Identifier: ISC

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

/// @title Coin contract - simple crypto currency form
/// @author Errmac
/// @notice Simple contract
contract Coin is Ownable {
    using SafeMath for uint256;

    /// @notice Transfer data for Send event
    /// @param from Sender address
    /// @param to Receiver address
    /// @param amount Amount of coins
    struct TransferData {
        address from;
        address to;
        uint256 amount;
    }

    /// @notice Account balances
    mapping(address => uint256) public balances;

    /// @notice Send event allows to react to specific contract changes
    /// @param data Transfer data event param
    event Send(TransferData data);

    /// @notice Insufficient balance error happens when sender doesn"t have
    /// enough fund to transfer
    // error InsufficientBalance(uint requested, uint available);

    /// @notice Send an amount of newly created coins to an address.
    /// @dev required to be called only by owner
    /// @param receiver Receiver address
    /// @param amount Amount of coins to mint
    function mint(address receiver, uint256 amount) public onlyOwner {
        require(receiver != address(0), "Zero address is not allowed");
        require(amount < 1e10, "Amount is too large");
        balances[receiver] = balances[receiver].add(amount);
    }

    /// @notice Send amount of existing coins to an address
    /// @dev throws InsufficientBalance if account doesn"t have enough funds
    /// @param receiver Receiver address
    /// @param amount Amount of coins to send
    function send(address receiver, uint256 amount) public {
        require(receiver != address(0), "Zero address is not allowed");
        require(balances[msg.sender] >= amount, "Not enough funds");

        balances[msg.sender] = balances[msg.sender].sub(amount);
        balances[receiver] = balances[receiver].add(amount);
        emit Send(
            TransferData({from: msg.sender, to: receiver, amount: amount})
        );
    }
}
