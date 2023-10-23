import React, { useState } from "react";
import "../assets/styles/Registration.css"; // Import the CSS file for Registration
import { ethers } from "ethers";
import DigitalIdentityManagement from "../../../artifacts/contracts/DigitalIdentityManagement.sol/DigitalIdentityManagement.json";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    phoneNo: "",
    physicalAddress: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
  };

  const registerUser = async () => {
    if (!window.ethereum) {
      alert("MetaMask Not Installed!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let contract;
    if (provider) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      let contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

      contract = new ethers.Contract(
        contractAddress,
        DigitalIdentityManagement.abi,
        signer
      );
    } else {
      alert("Meta Mask is not Installed");
    }

    try {
      // Call the addUser function on the smart contract
      const transaction = await contract.addUser(
        formData.firstName,
        formData.middleName,
        formData.lastName,
        formData.email,
        formData.dob,
        formData.phoneNo,
        formData.physicalAddress
      );

      // Wait for the transaction to be mined
      await transaction.wait();

      // Registration successful, you can add further logic here
      alert("User Added!");
    } catch (error) {
      alert("Error");
      // Handle errors, e.g., display an error message
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="registration-container">
      <h2>Register for TrustChain</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="middleName">Middle Name:</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="text"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">Phone Number:</label>
          <input
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="physicalAddress">Physical Address:</label>
          <input
            type="text"
            name="physicalAddress"
            value={formData.physicalAddress}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
