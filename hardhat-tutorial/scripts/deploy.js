const { ethers } = require("hardhat");
const { CRYPTODEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Deploy the FakeNFTMarketplace contract first
/*  const FakeNFTMarketplace = await ethers.getContractFactory(
      "FakeNFTMarketplace"
  );
  const fakeNftMarketplace = await FakeNFTMarketplace.deploy();
  await fakeNftMarketplace.deployed();

  console.log("FakeNFTMarketplace deployed to: ", fakeNftMarketplace.address);*/

  // Now deploy the CryptoDevsDAO contract
  const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");
  const cryptoDevsDAO = await CryptoDevsDAO.deploy(
      '0x748fc786D594cab0245BF6De01eCF5366a81db82',
      CRYPTODEVS_NFT_CONTRACT_ADDRESS,
      {
        // This assumes your account has at least 1 ETH in it's account
        // Change this value as you want
        value: ethers.utils.parseEther("0.1"),
      }
  );
  await cryptoDevsDAO.deployed();

  console.log("CryptoDevsDAO deployed to: ", cryptoDevsDAO.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

//FakeNFTMarketplace:0x748fc786D594cab0245BF6De01eCF5366a81db82
//CryptoDevsDAO:0x0b21956Da5366EdD94fb28E0e9b22f4f8eB90c31