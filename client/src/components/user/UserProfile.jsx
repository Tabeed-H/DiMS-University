// UserProfile.js
import React from "react";
import "../../assets/styles/UserProfile.css";

const UserProfile = (props) => {
  const data = props.data;

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="user-info">
        <p>
          <strong>First Name:</strong> {data.firstName}
        </p>
        <p>
          <strong>Middle Name:</strong> {data.middleName}
        </p>
        <p>
          <strong>Last Name:</strong> {data.lastName}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>D.O.B:</strong> {data.dob}
        </p>
        <p>
          <strong>Phone Number:</strong> {data.pno}
        </p>
        <p>
          <strong>Address:</strong> {data.physicalAddress}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
