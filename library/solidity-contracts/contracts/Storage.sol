// SPDX-License-Identifier: ISC

pragma solidity ^0.8.4;

/// @title Storage contract
/// @author Errmac
/// @notice You can use this contract to store data
contract Storage {
    /// @notice private value
    uint256 private _value;

    /// @notice Constructor with initial store value
    constructor(uint256 value) public {
        _value = value;
    }

    /// @notice Set store value
    /// @param value Value to store
    function set(uint256 value) public {
        _value = value;
    }

    /// @notice Get store value
    /// @return Stored value
    function get() public view returns (uint256) {
        return _value;
    }
}
