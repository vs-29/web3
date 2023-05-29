require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/VKt4GLpCtMOh958ZafLTxB9NWsZ1g8JQ',
      accounts:['245d6e2371433b5fc8355ac7e050d08c80a318ccc4896a934bd65f280d8e853b']
    }
  }
};
