const { ethers, deployments } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  // Deploy your contract
  await deployments.deploy("DigitalIdentityManagement", {
    from: deployer.address,
    log: true, // Set to false to disable logging
  });

  // Access your deployed contract
  const contractFactory = await ethers.getContractFactory(
    "DigitalIdentityManagement"
  );
  const contract = await contractFactory.deploy();

  console.log("Contract deployed at address:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
