// AddressBar.js
import React, { useState } from "react";
import "../../assets/styles/AddressBar.css";

const AddressBar = ({ onScanQR, onGiveAccess }) => {
  const [address, setAddress] = useState("");

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className="address-bar">
      <input
        type="text"
        placeholder="Enter Service Provider Address"
        value={address}
        onChange={handleAddressChange}
      />
      <button onClick={onScanQR} className="address-button">
        Scan QR
      </button>
      <button onClick={() => onGiveAccess(address)} className="address-button">
        Give Access
      </button>
    </div>
  );
};

export default AddressBar;
