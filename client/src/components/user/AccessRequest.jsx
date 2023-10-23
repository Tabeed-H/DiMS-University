// AccessRequests.js
import React, { useState, useEffect } from "react";
import "../../assets/styles/AccessRequest.css";
const AccessRequests = (props) => {
  const data = props.data;

  return (
    <div className="access-requests">
      <h2>Allowed Services</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default AccessRequests;
