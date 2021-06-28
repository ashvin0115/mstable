"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hardhatConfig = void 0;
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@tenderly/hardhat-tenderly");
require("@typechain/hardhat");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("ts-node/register");
require("tsconfig-paths/register");
// chainId?: number
// from?: string;
// gas: "auto" | number;
// gasPrice: "auto" | number;
// gasMultiplier: number;
// url: string;
// timeout: number;
// httpHeaders: { [name: string]: string };
// accounts: HttpNetworkAccountsConfig;
exports.hardhatConfig = {
    networks: {
        hardhat: {
            allowUnlimitedContractSize: true,
        },
        localhost: { url: "http://localhost:7545" },
        fork: {
            url: "http://localhost:7545",
        },
        // export the NODE_URL environment variable to use remote nodes like Alchemy or Infura. eg
        // export NODE_URL=https://eth-mainnet.alchemyapi.io/v2/yourApiKey
        env: { url: process.env.NODE_URL || "" },
        ropsten: {
            url: process.env.NODE_URL || "",
            accounts: process.env.ROPSTEN_PRIVATE_KEY1 ? [process.env.ROPSTEN_PRIVATE_KEY1] : [],
            gasPrice: 30000000000,
            gasLimit: 8000000,
        },
        polygon_testnet: {
            url: "https://rpc-mumbai.maticvigil.com",
            accounts: process.env.MUMBAI_PRIVATE_KEY1 ? [process.env.MUMBAI_PRIVATE_KEY1] : [],
        },
        polygon_mainnet: {
            url: "https://rpc-mainnet.matic.quiknode.pro",
            accounts: process.env.POLYGON_PRIVATE_KEY1 ? [process.env.POLYGON_PRIVATE_KEY1] : [],
        },
    },
    solidity: {
        version: "0.8.2",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
            outputSelection: {
                "*": {
                    Masset: ["storageLayout"],
                    FeederPool: ["storageLayout"],
                },
            },
        },
    },
    paths: { artifacts: "./build" },
    gasReporter: {
        currency: "USD",
        gasPrice: 30,
    },
    mocha: {
        timeout: 240000, // 4 min timeout
    },
    typechain: {
        outDir: "types/generated",
        target: "ethers-v5",
    },
    tenderly: {
        username: "mStable",
        project: "mStable-contracts",
    },
};
exports.default = exports.hardhatConfig;
//# sourceMappingURL=hardhat.config.js.map