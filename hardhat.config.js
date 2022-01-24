require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: {
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    },
    compilers: [
      { version: "0.7.5" },
      { version: "0.5.16" },
      { version: "0.6.6" },
    ]
  },
  defaultNetwork: "bsctestnet",
  networks: {
    bsctestnet: {
      url: "https://data-seed-prebsc-2-s3.binance.org:8545/",
      accounts: ['e7d431ed9799d85bd5363938ed4a46a3697a82aecad935e65adb7413506d2700']
    }
  },
};
