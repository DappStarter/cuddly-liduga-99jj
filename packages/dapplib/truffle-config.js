require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name renew pitch modify guess another army gauge'; 
let testAccounts = [
"0x630184aff60a86c48121b24f772b470081d263d96c662c3a4f6eae100b478048",
"0x46ed07e1a5789cf80e83fb045eebb69a7f45464c2d2249671053987857bbe81f",
"0x43ebc4461e0c8f788e74e33b62349f21b50556c0cb493df3972cd95e3f1b7ba4",
"0x9d9874198a9deb73e1426d0fe68318189791fafcc27815d9e31a45eb3b6aaa04",
"0x93c1c0f25b699f35af5a689dc59a618e553bda6b8410808035e96a8ba2a7d768",
"0x264865b19418cfef8cfa027a8ed02d265e7f9b98bff881d14c5f5cfc1e2825a3",
"0x5599a74cdfe68b85975a037a93aba180d0c327a548856a68cb0a6e8a6bcf553d",
"0xadbde890ceece30421ae5657a85951c6b671c627050b943168d9511b3450e7c3",
"0x8e2d14e2f083039907652c65658561db4662b63eb09a665e029ef22d231e1de2",
"0x554d191d55e452794d12ef10473855de8fa7b5731ab5227e59e85d21be9d886c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

