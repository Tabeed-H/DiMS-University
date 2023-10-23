import React, { useState, useEffect } from "react";
import "../../assets/styles/AccessRequest.css";

const AccessRequests = (props) => {
  const data = props.data;
  const handleRevokeAccess = (serviceProviderAddress) => {
    // Implement the logic to revoke access here
    // You may need to call the revokeAccess function using ethers
    props.onDelete(serviceProviderAddress);
  };

  return (
    <div className="access-requests">
      <h2>Allowed Services</h2>
      <div className="list-container">
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleRevokeAccess(item)} className="btn">
                Delete Access
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccessRequests;
