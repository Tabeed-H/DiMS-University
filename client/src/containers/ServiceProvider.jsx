import React, { useEffect, useState } from "react";
import { ethers } from "ethers"; // Import ethers.js
import DigitalIdentityManagement from "../../../artifacts/contracts/DigitalIdentityManagement.sol/DigitalIdentityManagement.json";
import Header from "../components/user/Header";
import "../assets/styles/ServiceProvider.css"; // Import the CSS file for AddServiceProvider

const AddServiceProvider = () => {
  const [serviceProviderAddress, setServiceProviderAddress] = useState("");
  const [serviceProviderName, setServiceProviderName] = useState("");
  let contract;
  let address;

  const handleAddressChange = (e) => {
    setServiceProviderAddress(e.target.value);
  };

  const handleNameChange = (e) => {
    setServiceProviderName(e.target.value);
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
      setServiceProviderAddress(address);
      let contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

      contract = new ethers.Contract(
        contractAddress,
        DigitalIdentityManagement.abi,
        signer
      );
    } else {
      alert("Meta Mask is not Installed");
    }
  };

  const handleAddServiceProvider = async () => {
    try {
      getConnection();
      if (ethers.utils.isAddress(serviceProviderAddress)) {
        await contract.addServiceProvider(
          serviceProviderAddress,
          serviceProviderName
        );
        alert("service Provider Added!");
      } else {
        alert("Unknown Error Occured!");
      }
    } catch (error) {
      console.log(error.message);
      alert("Service Provider Already Registered");
    }
  };
  useEffect(() => {
    getConnection();
  }, []);

  return (
    <>
      <Header user={""} connectedAccount={serviceProviderAddress} />
      <div className="add-service-provider-container">
        <h2>Add Service Provider</h2>
        <div className="form-group">
          <label htmlFor="address">Service Provider Address:</label>
          <input
            type="text"
            name="address"
            value={serviceProviderAddress}
            onChange={handleAddressChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Service Provider Name:</label>
          <input
            type="text"
            name="name"
            value={serviceProviderName}
            onChange={handleNameChange}
          />
        </div>
        <button onClick={handleAddServiceProvider}>Add Service Provider</button>
      </div>
    </>
  );
};

export default AddServiceProvider;
