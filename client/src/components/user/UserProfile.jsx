// UserProfile.js
import React from "react";
import "../../assets/styles/UserProfile.css";

const UserProfile = () => {
  // Dummy user data (replace with actual user data from your application)
  const userData = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    // Add more user data fields as needed
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="user-info">
        <p>
          <strong>First Name:</strong> {userData.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {userData.lastName}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        {/* Add more user data fields here */}
      </div>
    </div>
  );
};

export default UserProfile;
