"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collector__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_nexus",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_mAssets",
                type: "address[]",
            },
            {
                internalType: "bool",
                name: "_collectFirst",
                type: "bool",
            },
        ],
        name: "distributeInterest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "nexus",
        outputs: [
            {
                internalType: "contract INexus",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60a060405234801561001057600080fd5b5060405161053238038061053283398101604081905261002f916100a0565b806001600160a01b03811661008a5760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f0000000000000000000000604482015260640160405180910390fd5b60601b6001600160601b031916608052506100ce565b6000602082840312156100b1578081fd5b81516001600160a01b03811681146100c7578182fd5b9392505050565b60805160601c6104406100f2600039600081816040015261028101526104406000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a3f5c1d21461003b578063f7fcdf681461007e575b600080fd5b6100627f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b61009161008c366004610347565b610093565b005b600061009d610249565b905082806100e25760405162461bcd60e51b815260206004820152600e60248201526d496e76616c696420696e7075747360901b604482015260640160405180910390fd5b60005b8181101561024157831561019157826001600160a01b031663ca2bdfe687878481811061012257634e487b7160e01b600052603260045260246000fd5b90506020020160208101906101379190610308565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b15801561017857600080fd5b505af115801561018c573d6000803e3d6000fd5b505050505b826001600160a01b03166321aec84a8787848181106101c057634e487b7160e01b600052603260045260246000fd5b90506020020160208101906101d59190610308565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b15801561021657600080fd5b505af115801561022a573d6000803e3d6000fd5b505050508080610239906103cb565b9150506100e5565b505050505050565b6040516385acd64160e01b81527f12fe936c77a1e196473c4314f3bed8eeac1d757b319abb85bdda70df35511bf160048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906385acd6419060240160206040518083038186803b1580156102cb57600080fd5b505afa1580156102df573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610303919061032b565b905090565b600060208284031215610319578081fd5b8135610324816103f2565b9392505050565b60006020828403121561033c578081fd5b8151610324816103f2565b60008060006040848603121561035b578182fd5b833567ffffffffffffffff80821115610372578384fd5b818601915086601f830112610385578384fd5b813581811115610393578485fd5b87602080830285010111156103a6578485fd5b6020928301955093505084013580151581146103c0578182fd5b809150509250925092565b60006000198214156103eb57634e487b7160e01b81526011600452602481fd5b5060010190565b6001600160a01b038116811461040757600080fd5b5056fea2646970667358221220392232b2678b4428a7489b8f845efb1b3dcda41559cd7c06625fe8b8a7b99acb64736f6c63430008020033";
class Collector__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_nexus, overrides) {
        return super.deploy(_nexus, overrides || {});
    }
    getDeployTransaction(_nexus, overrides) {
        return super.getDeployTransaction(_nexus, overrides || {});
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
exports.Collector__factory = Collector__factory;
Collector__factory.bytecode = _bytecode;
Collector__factory.abi = _abi;
//# sourceMappingURL=Collector__factory.js.map