require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const POLYGON_URL=process.env.POLYGON_URL;
const PRIVATE_KEY=process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    polygon:{
      url:POLYGON_URL,
      accounts:[PRIVATE_KEY]
    }
  }
};
