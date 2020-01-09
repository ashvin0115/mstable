pragma solidity ^0.5.12;
pragma experimental ABIEncoderV2;

/**
 * @title IOracleHub
 * @dev Interface for tracking oracles
 */
interface IOracleHub {
    function readPrice(bytes32 _key) external view returns(bool, uint64);
    function readPricePair(bytes32[2] calldata _keys) external view returns(bool[2] memory, uint64[2] memory);
    function postPrices(bytes[] calldata messages, bytes[] calldata signatures, bytes32[] calldata symbols) external;
}