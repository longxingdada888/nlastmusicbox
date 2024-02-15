// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const wallets = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", wallets[0].address);
  // return;

  const lock = await hre.ethers.deployContract("nlastmusicbox", {
    value: 0,
  });

  await lock.waitForDeployment();

  const price = hre.ethers.parseEther("0.01");

  await lock.mint({
    value: price,
  });

  await lock.mint({
    value: price,
  });

  await lock.mint({
    value: price,
  });

  await lock.mint({
    value: price,
  });

  await lock.mint({
    value: price,
  });

  console.log(
     `deployed to ${lock.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
