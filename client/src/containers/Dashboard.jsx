// UserDashboard.js
import React, { useEffect, useState } from "react";
import { ethers } from "ethers"; // Import ethers
import DigitalIdentityManagement from "../../../artifacts/contracts/DigitalIdentityManagement.sol/DigitalIdentityManagement.json";
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
  const [userAddress, setUserAddress] = useState("");
  let contract;
  let address;
  const [userData, setUserData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    dob: "",
    pno: "",
    physicalAddress: "",
  });
  const [allowedServiceProviders, setAllowedServiceProviders] = useState([]);

  // Function to handle giving access (you can implement this function as needed)
  const handleGiveAccess = (address) => {
    // Implement your logic for giving access to the provided address here
    console.log(`Access given to address: ${address}`);
  };
  const getConnection = async () => {
    if (!window.ethereum) {
      alert("MetaMask Not Installed!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    if (provider) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const signer = provider.getSigner();
      address = await signer.getAddress();
      setUserAddress(address);
      let contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

      contract = new ethers.Contract(
        contractAddress,
        DigitalIdentityManagement.abi,
        signer
      );
    } else {
      alert("Meta Mask is not Installed");
    }
  };
  const getUserDetails = async () => {
    await getConnection();

    try {
      // Call the addUser function on the smart contract
      const transaction = await contract.getUserDetails(address);
      const [
        firstName,
        middleName,
        lastName,
        email,
        dob,
        pno,
        physicalAddress,
      ] = transaction;

      setUserData({
        firstName,
        middleName,
        lastName,
        email,
        dob,
        pno,
        physicalAddress,
      });
      console.log(userData);

      // Registration successful, you can add further logic here
      alert("User fetched!");
    } catch (error) {
      alert("User Not Found!");
    }
  };

  const fetchAllowedServiceProviders = async () => {
    try {
      await getConnection();

      // Call the `getUserAccessList` function on your contract
      const accessList = await contract.getUserAccessList();

      // Update the state variable with the list of allowed service providers
      setAllowedServiceProviders(accessList);
    } catch (error) {
      console.error("Error fetching allowed service providers:", error);
      alert(
        "Error fetching allowed Service providers. PleaSe check your wallet connection and try again."
      );
    }
  };

  useEffect(() => {
    getUserDetails();
    fetchAllowedServiceProviders();
  }, []);

  return (
    <div className="user-dashboard">
      <Header user={userData.firstName} connectedAccount={userAddress} />
      <AddressBar />
      <div className="dashboard-content">
        <div>
          <button onClick={toggleUserProfile} className="toggle-button">
            View Profile
          </button>
          <button onClick={toggleAccessRequests} className="toggle-button">
            Allowed
          </button>
        </div>
        <div className="component-container">
          {isUserProfileActive && <UserProfile data={userData} />}
          {isAccessRequestsActive && (
            <AccessRequests data={allowedServiceProviders} />
          )}
        </div>
        {/* The active section is displayed based on the state */}
      </div>
    </div>
  );
};

export default UserDashboard;
