// AddressBar.js
import React, { useState } from "react";
import { ethers } from "ethers"; // Import ethers
import DigitalIdentityManagement from "../../../../artifacts/contracts/DigitalIdentityManagement.sol/DigitalIdentityManagement.json";
import "../../assets/styles/AddressBar.css";

const AddressBar = () => {
  let [address, setAddress] = useState("");
  let contract;
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const getConnection = async () => {
    if (!window.ethereum) {
      alert("MetaMask Not Installed!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    if (provider) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const signer = provider.getSigner();
      address = await signer.getAddress();
      setAddress(address);
      let contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

      contract = new ethers.Contract(
        contractAddress,
        DigitalIdentityManagement.abi,
        signer
      );
      console.log(contract);
    } else {
      alert("Meta Mask is not Installed");
    }
  };
  const onGiveAccess = async (address) => {
    try {
      await getConnection();
      // Call the `grantAccess` function on your contract
      await contract.grantAccess(address);

      // Wait for the transaction to be mined

      // Notify the user that access has been granted
      alert("Access granted successfully!");
    } catch (error) {
      console.error("Error granting access:", error);
      alert(
        "Error granting access. Please check your wallet connection and try again."
      );
    }
  };

  return (
    <div className="address-bar">
      <input
        type="text"
        placeholder="Enter Service Provider Address"
        value={address}
        onChange={handleAddressChange}
      />
      <button className="address-button">Scan QR</button>
      <button onClick={() => onGiveAccess(address)} className="address-button">
        Give Access
      </button>
    </div>
  );
};

export default AddressBar;
