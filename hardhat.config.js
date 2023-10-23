// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");
module.exports = {
  solidity: "0.8.19", // Specify your desired Solidity version

  networks: {
    hardhat: {
      chainId: 1337, // Replace with the appropriate chain ID for your local network
    },
  },
  paths: {
    sources: "./contracts",
  },
};
