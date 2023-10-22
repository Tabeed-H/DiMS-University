// UserDashboard.js
import React, { useState } from "react";
import Header from "../components/user/Header";
// import Navigation from "../components/user/Navigation";
import UserProfile from "../components/user/UserProfile";
import AccessRequests from "../components/user/AccessRequest";
import AddressBar from "../components/user/AddressBar";
import "../assets/styles/Dashboard.css";

const UserDashboard = () => {
  // State to track which section is active
  const [isUserProfileActive, setIsUserProfileActive] = useState(true);
  const [isAccessRequestsActive, setIsAccessRequestsActive] = useState(false);

  // Function to toggle user profile component
  const toggleUserProfile = () => {
    setIsUserProfileActive(true);
    setIsAccessRequestsActive(false);
  };

  // Function to toggle access requests component
  const toggleAccessRequests = () => {
    setIsUserProfileActive(false);
    setIsAccessRequestsActive(true);
  };

  // User information and connected account data
  const user = {
    firstName: "Tabeed",
    lastName: "Hameed",
  };
  const connectedAccount = "Ethereum";

  // Function to handle giving access (you can implement this function as needed)
  const handleGiveAccess = (address) => {
    // Implement your logic for giving access to the provided address here
    console.log(`Access given to address: ${address}`);
  };

  return (
    <div className="user-dashboard">
      <Header user={user} connectedAccount={connectedAccount} />
      <AddressBar onGiveAccess={handleGiveAccess} />
      <div className="dashboard-content">
        <div>
          <button onClick={toggleUserProfile} className="toggle-button">
            View Profile
          </button>
          <button onClick={toggleAccessRequests} className="toggle-button">
            View Requests
          </button>
        </div>
        <div className="component-container">
          {isUserProfileActive && <UserProfile />}
          {isAccessRequestsActive && <AccessRequests />}
        </div>
        {/* The active section is displayed based on the state */}
      </div>
    </div>
  );
};

export default UserDashboard;
