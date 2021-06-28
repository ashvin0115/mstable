import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockStakedAave, MockStakedAaveInterface } from "../MockStakedAave";
export declare class MockStakedAave__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_aave: string, _initialRecipient: string, _initialMint: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockStakedAave>;
    getDeployTransaction(_aave: string, _initialRecipient: string, _initialMint: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockStakedAave;
    connect(signer: Signer): MockStakedAave__factory;
    static readonly bytecode = "0x60a0604052620d2f006005556202a3006006553480156200001f57600080fd5b506040516200127638038062001276833981016040819052620000429162000292565b604080518082018252600b81526a5374616b6564204161766560a81b60208083019182528351808501909452600784526673746b4141564560c81b9084015281519192916200009491600391620001cf565b508051620000aa906004906020840190620001cf565b5050506001600160601b0319606084901b16608052620000de82620000d883670de0b6b3a7640000620002ed565b620000e7565b50505062000362565b6001600160a01b038216620001425760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620001569190620002d2565b90915550506001600160a01b0382166000908152602081905260408120805483929062000185908490620002d2565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dd906200030f565b90600052602060002090601f0160209004810192826200020157600085556200024c565b82601f106200021c57805160ff19168380011785556200024c565b828001600101855582156200024c579182015b828111156200024c5782518255916020019190600101906200022f565b506200025a9291506200025e565b5090565b5b808211156200025a57600081556001016200025f565b80516001600160a01b03811681146200028d57600080fd5b919050565b600080600060608486031215620002a7578283fd5b620002b28462000275565b9250620002c26020850162000275565b9150604084015190509250925092565b60008219821115620002e857620002e86200034c565b500190565b60008160001904831182151516156200030a576200030a6200034c565b500290565b6002810460018216806200032457607f821691505b602082108114156200034657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60805160601c610ee76200038f60003960008181610228015281816104b401526107240152610ee76000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806370a08231116100ad5780639a99b4f0116100715780639a99b4f01461026a578063a457c2d71461027d578063a9059cbb14610290578063adc9772e146102a3578063dd62ed3e146102b657610121565b806370a08231146101f057806372b49d6314610203578063787a08a61461020c578063819faf7b1461022357806395d89b411461026257610121565b80631e9a6950116100f45780631e9a69501461019d57806323b872dd146101b2578063313ce567146101c5578063359c4a96146101d457806339509351146101dd57610121565b806306fdde0314610126578063091030c314610144578063095ea7b31461017257806318160ddd14610195575b600080fd5b61012e6102ef565b60405161013b9190610dde565b60405180910390f35b610164610152366004610d07565b60076020526000908152604090205481565b60405190815260200161013b565b610185610180366004610d95565b610381565b604051901515815260200161013b565b600254610164565b6101b06101ab366004610d95565b610397565b005b6101856101c0366004610d5a565b610536565b6040516012815260200161013b565b61016460065481565b6101856101eb366004610d95565b6105e7565b6101646101fe366004610d07565b61061e565b61016460055481565b6101b0336000908152600760205260409020429055565b61024a7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161013b565b61012e61063d565b6101b0610278366004610d95565b61064c565b61018561028b366004610d95565b61065a565b61018561029e366004610d95565b6106f5565b6101b06102b1366004610d95565b610702565b6101646102c4366004610d28565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546102fe90610e60565b80601f016020809104026020016040519081016040528092919081815260200182805461032a90610e60565b80156103775780601f1061034c57610100808354040283529160200191610377565b820191906000526020600020905b81548152906001019060200180831161035a57829003601f168201915b5050505050905090565b600061038e3384846107c5565b50600192915050565b600554336000908152600760205260409020546103b49190610e31565b42116103ff5760405162461bcd60e51b815260206004820152601560248201527424a729aaa32324a1a4a2a72a2fa1a7a7a62227aba760591b60448201526064015b60405180910390fd5b6006546005543360009081526007602052604090205461041f9190610e31565b6104299190610e31565b42106104775760405162461bcd60e51b815260206004820152601760248201527f554e5354414b455f57494e444f575f46494e495348454400000000000000000060448201526064016103f6565b60006104823361061e565b905061048e33826108ea565b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b1580156104f857600080fd5b505af115801561050c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105309190610dbe565b50505050565b6000610543848484610a39565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156105c85760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084016103f6565b6105dc85336105d78685610e49565b6107c5565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161038e9185906105d7908690610e31565b6001600160a01b0381166000908152602081905260409020545b919050565b6060600480546102fe90610e60565b6106568282610c11565b5050565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156106dc5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103f6565b6106eb33856105d78685610e49565b5060019392505050565b600061038e338484610a39565b6040516323b872dd60e01b8152336004820152306024820152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd90606401602060405180830381600087803b15801561077057600080fd5b505af1158015610784573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a89190610dbe565b503360009081526007602052604090204290556106568282610c11565b6001600160a01b0383166108275760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103f6565b6001600160a01b0382166108885760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103f6565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b03821661094a5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103f6565b6001600160a01b038216600090815260208190526040902054818110156109be5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103f6565b6109c88282610e49565b6001600160a01b038416600090815260208190526040812091909155600280548492906109f6908490610e49565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016108dd565b6001600160a01b038316610a9d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103f6565b6001600160a01b038216610aff5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103f6565b6001600160a01b03831660009081526020819052604090205481811015610b775760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103f6565b610b818282610e49565b6001600160a01b038086166000908152602081905260408082209390935590851681529081208054849290610bb7908490610e31565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c0391815260200190565b60405180910390a350505050565b6001600160a01b038216610c675760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103f6565b8060026000828254610c799190610e31565b90915550506001600160a01b03821660009081526020819052604081208054839290610ca6908490610e31565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b80356001600160a01b038116811461063857600080fd5b600060208284031215610d18578081fd5b610d2182610cf0565b9392505050565b60008060408385031215610d3a578081fd5b610d4383610cf0565b9150610d5160208401610cf0565b90509250929050565b600080600060608486031215610d6e578081fd5b610d7784610cf0565b9250610d8560208501610cf0565b9150604084013590509250925092565b60008060408385031215610da7578182fd5b610db083610cf0565b946020939093013593505050565b600060208284031215610dcf578081fd5b81518015158114610d21578182fd5b6000602080835283518082850152825b81811015610e0a57858101830151858201604001528201610dee565b81811115610e1b5783604083870101525b50601f01601f1916929092016040019392505050565b60008219821115610e4457610e44610e9b565b500190565b600082821015610e5b57610e5b610e9b565b500390565b600281046001821680610e7457607f821691505b60208210811415610e9557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea264697066735822122058376cb2bc5f5219eef26126a4878deedb4ac26da77ee4b54d77d05615c2016364736f6c63430008020033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): MockStakedAaveInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockStakedAave;
}
