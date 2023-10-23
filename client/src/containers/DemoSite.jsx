import React, { useEffect, useState } from "react";
import "../assets/styles/DemoSite.css";
import LoginModal from "../components/user/LoginModal";
import { ethers } from "ethers";
import DigitalIdentityManagement from "../../../artifacts/contracts/DigitalIdentityManagement.sol/DigitalIdentityManagement.json";
import { Link } from "react-router-dom";
function DemoSite() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  let contract;
  let [address, setAddress] = useState("");
  const _serviceProviderAddress = "0xFABB0ac9d68B0B445fB7357272Ff202C5651694a";
  const getConnection = async () => {
    if (!window.ethereum) {
      alert("MetaMask Not Installed!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    if (provider) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const signer = provider.getSigner();
      const Outaddress = await signer.getAddress();
      setAddress(Outaddress);
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

  const handleLogin = async () => {
    try {
      await getConnection();
      let result = await contract.provideDetails(_serviceProviderAddress);
      console.log(result);

      // Assuming your result includes the user's name
      if (result.user_FirstName) {
        setIsLoggedIn(true);
        setUserName(result.user_FirstName);
      }
    } catch (err) {
      alert("Access Denied!");
      console.log(err.message);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <header>
        <div className="logo">Book4Uni</div>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#books">Books</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="cta-buttons">
          {isLoggedIn ? (
            <div className="welcome-message">Welcome, {userName}</div>
          ) : (
            <>
              <button className="login-button" onClick={openModal}>
                Login
              </button>
              <button className="join-us-button">
                <Link to="/demo/signup">Join Us</Link>
              </button>
            </>
          )}
        </div>
      </header>
      <section className="hero">
        <h1>A Great Place to Share Books</h1>
        <p>Used Books from seniors to their juniors on campus</p>
        <button className="search-books-button">Search Books</button>
      </section>
      <LoginModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onLogin={handleLogin}
      />
    </div>
  );
}

export default DemoSite;
