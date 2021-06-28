import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockRevenueRecipient, MockRevenueRecipientInterface } from "../MockRevenueRecipient";
export declare class MockRevenueRecipient__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockRevenueRecipient>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockRevenueRecipient;
    connect(signer: Signer): MockRevenueRecipient__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610234806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063706d01861461003b5780637bf3053914610050575b600080fd5b61004e610049366004610138565b610064565b005b61004e61005e36600461016e565b50505050565b6040516323b872dd60e01b8152336004820152306024820152604481018290526001600160a01b038316906323b872dd90606401602060405180830381600087803b1580156100b257600080fd5b505af11580156100c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100ea91906101d7565b505050565b60008083601f840112610100578182fd5b50813567ffffffffffffffff811115610117578182fd5b602083019150836020808302850101111561013157600080fd5b9250929050565b6000806040838503121561014a578182fd5b82356001600160a01b0381168114610160578283fd5b946020939093013593505050565b60008060008060408587031215610183578182fd5b843567ffffffffffffffff8082111561019a578384fd5b6101a6888389016100ef565b909650945060208701359150808211156101be578384fd5b506101cb878288016100ef565b95989497509550505050565b6000602082840312156101e8578081fd5b815180151581146101f7578182fd5b939250505056fea2646970667358221220e9d284b12494cc327210a4a749bbc91d6a312fbb9925d83a3b7ccd8ccad3c23e64736f6c63430008020033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): MockRevenueRecipientInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockRevenueRecipient;
}
