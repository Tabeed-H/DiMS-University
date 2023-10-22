// AccessRequests.js
import React from "react";
import "../../assets/styles/AccessRequest.css";
const AccessRequests = () => {
  // Dummy access request data (replace with actual data from your application)
  const accessRequests = [
    {
      service: "Service A",
      requestedData: "User Profile",
      status: "Pending",
    },
    {
      service: "Service B",
      requestedData: "Payment History",
      status: "Approved",
    },
    // Add more access request data as needed
  ];

  return (
    <div className="access-requests">
      <h2>Access Requests</h2>
      {accessRequests.map((request, index) => (
        <div key={index} className="access-request">
          <p>
            <strong>Service:</strong> {request.service}
          </p>
          <p>
            <strong>Requested Data:</strong> {request.requestedData}
          </p>
          <p>
            <strong>Status:</strong> {request.status}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AccessRequests;
