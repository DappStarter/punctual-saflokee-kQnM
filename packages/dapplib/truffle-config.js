require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remind history grid gloom suspect ski'; 
let testAccounts = [
"0x0690522e33d7ccaedea21201e6ab4114b181acc1dbcf1d500bd40abb082f3c96",
"0x09ac985efe89459025913bc03dcf10fa87f7eb7d778c8488fd076c2902797c60",
"0xa8bbc9f435c7b69315311d5bc4efd71c23e92f6e6a83cb4b8de088380ccdee91",
"0x2810e79ffeee6767940469290b48683e4f7b48f163ec48e36c1d51e365e3ad4f",
"0xdc99a3591b2a5afd4466c1ddbf5e70572dfdf86ecb2a002ffe0135b50a631368",
"0x340181f8d455c38f555d9a61c2f0d31bc940dd90ecea134d5c5d7a121d84ba15",
"0x0eb55a48ec40c49efb4d882cc748d73bd332c28f8fe1fd27cf2b9a097364bb59",
"0x03eda1d2561463e2089b517239fdfecb30187c7e0e3f2c3c24a4b83411065e53",
"0x17d2d1144b567e1c0db7215d1507e3cf949780403c5af15faca19157ba4c8e77",
"0x0755014ebe7663141bda09eb6c6914942d6eea43c7ea6cda8283ff5bf90da2af"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


