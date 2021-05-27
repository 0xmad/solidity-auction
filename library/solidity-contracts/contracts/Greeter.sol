// SPDX-License-Identifier: ISC

pragma solidity ^0.8.4;

/// @title Greeter contract
/// @author Errmac
/// @notice You can use this contract for only the most basic case
contract Greeter {
    string private _greeting;

    /// @notice Create Greeter with greeting value
    /// @param greeting Initial greeting
    constructor(string memory greeting) public {
        _greeting = greeting;
    }

    /// @notice Returns the greeting
    /// @return current greeting
    function greet() public view returns (string memory) {
        return _greeting;
    }

    /// @notice Set greeting
    function setGreeting(string memory greeting) public {
        _greeting = greeting;
    }
}
