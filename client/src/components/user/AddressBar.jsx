// AddressBar.js
import React, { useState } from "react";
import { ethers } from "ethers"; // Import ethers
import DigitalIdentityManagement from "../../../../artifacts/contracts/DigitalIdentityManagement.sol/DigitalIdentityManagement.json";
import "../../assets/styles/AddressBar.css";

const AddressBar = (props) => {
  let [address, setAddress] = useState("");
  let contract;
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const onGiveAccess = async (address) => {
    props.onGiveAccess(address);
  };

  return (
    <div className="address-bar">
      <input
        type="text"
        placeholder="Enter Service Provider Address"
        value={address}
        onChange={handleAddressChange}
      />
      <button onClick={() => onGiveAccess(address)} className="address-button">
        Give Access
      </button>
      <button className="address-button">Scan QR</button>
    </div>
  );
};

export default AddressBar;
