"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockConnector__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_save",
                type: "address",
            },
            {
                internalType: "address",
                name: "_mUSD",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "checkBalance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "withdrawAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506040516104a33803806104a383398101604081905261002f9161007c565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100ae565b80516001600160a01b038116811461007757600080fd5b919050565b6000806040838503121561008e578182fd5b61009783610060565b91506100a560208401610060565b90509250929050565b6103e6806100bd6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632e1a7d4d14610051578063853828b614610066578063b6b55f251461006e578063c71daccb14610081575b600080fd5b61006461005f36600461031c565b610096565b005b61006461016c565b61006461007c36600461031c565b61022a565b60025460405190815260200160405180910390f35b6000546001600160a01b031633146100c95760405162461bcd60e51b81526004016100c090610334565b60405180910390fd5b60015460005460405163a9059cbb60e01b81526001600160a01b0391821660048201526024810184905291169063a9059cbb90604401602060405180830381600087803b15801561011957600080fd5b505af115801561012d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015191906102f5565b5080600260008282546101649190610383565b909155505050565b6000546001600160a01b031633146101965760405162461bcd60e51b81526004016100c090610334565b60015460005460025460405163a9059cbb60e01b81526001600160a01b039283166004820152602481019190915291169063a9059cbb90604401602060405180830381600087803b1580156101ea57600080fd5b505af11580156101fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061022291906102f5565b506000600255565b6000546001600160a01b031633146102545760405162461bcd60e51b81526004016100c090610334565b6001546000546040516323b872dd60e01b81526001600160a01b039182166004820152306024820152604481018490529116906323b872dd90606401602060405180830381600087803b1580156102aa57600080fd5b505af11580156102be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e291906102f5565b508060026000828254610164919061036b565b600060208284031215610306578081fd5b81518015158114610315578182fd5b9392505050565b60006020828403121561032d578081fd5b5035919050565b60208082526017908201527f4f6e6c7920534156452063616e2063616c6c2074686973000000000000000000604082015260600190565b6000821982111561037e5761037e61039a565b500190565b6000828210156103955761039561039a565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220875d35f19c2b4a4826ab6d95a9d54a75d295649692c39fa4623d583c9bf58f0f64736f6c63430008020033";
class MockConnector__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_save, _mUSD, overrides) {
        return super.deploy(_save, _mUSD, overrides || {});
    }
    getDeployTransaction(_save, _mUSD, overrides) {
        return super.getDeployTransaction(_save, _mUSD, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MockConnector__factory = MockConnector__factory;
MockConnector__factory.bytecode = _bytecode;
MockConnector__factory.abi = _abi;
//# sourceMappingURL=MockConnector__factory.js.map