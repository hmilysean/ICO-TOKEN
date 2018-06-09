var MCToken = artifacts.require("./MCToken.sol");
var MCCrowdsale = artifacts.require("./MCTokenCrowdsale.sol");

// 设定参数，此处的参数即使传入合约构造方法的参数，与你自己编写的合约保持一致
const durationTime = 36000000
const rate = new web3.BigNumber(1000)
const address = "0xDf44d9c60CDfa5c877e8863B03EaB0F85c0e1D71"
const wallet = "0xB4181B8c372a5B9A38ed4C9aBf148a815D7697A2"

// module.exports = function(deployer) {
//   deployer.deploy(MCToken,100000,"MCToken","MCT_TEST").then(function(){
//     // return deployer.deploy(MCCrowdsale,"0xb0636633bcdc943a9f35becce2f05228ddf450a7", MCToken.address);
//   });
// };


module.exports = function(deployer) {
  
    deployer.deploy(MCCrowdsale,wallet, address);

};




