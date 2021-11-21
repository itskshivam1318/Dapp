pragma solidity ^0.6.4;

contract SimpleStorage {
    uint256 x;

    function get() public view returns (uint256) {
        return x;
    }

    function set(uint256 value) public {
        x = value;
    }
}
