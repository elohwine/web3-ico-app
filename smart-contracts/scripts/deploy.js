const { ethers } = require("hardhat");

async function main() {
  //STKN
  console.log("Deploying STKN Contract...");
  const stkn = await ethers.deployContract("STKN");
  await stkn.waitForDeployment();

  console.log("Deployed STKN:", stkn.target);

  //STKNICO
  console.log("Deploying stknICO Contract...");
  const StknICOFactory = await ethers.getContractFactory("StknICO");
  const stknICO = await StknICOFactory.deploy(
    "0x00f2a05f8327ac26e1994b92dbd4e4813bfa8609",
    stkn.target
  );

  await stknICO.waitForDeployment();

  console.log("Deployed stknICO:", stknICO.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
