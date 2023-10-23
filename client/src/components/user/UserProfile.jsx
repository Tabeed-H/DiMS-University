// UserProfile.js
import React from "react";
import "../../assets/styles/UserProfile.css";

const UserProfile = (props) => {
  const data = props.data;

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="user-info">
        <div className="left">
          <p>First Name</p>
          <p>Middle Name</p>
          <p>Last Name</p>
          <p>Email</p>
          <p>Date of Birth</p>
          <p>Contact</p>
          <p>Address</p>
        </div>
        <div className="right">
          <p>{data.firstName}</p>
          <p>{data.middleName}</p>
          <p>{data.lastName}</p>
          <p>{data.email}</p>
          <p>{data.dob}</p>
          <p>{data.pno}</p>
          <p>{data.physicalAddress}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
