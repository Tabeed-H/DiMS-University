import React, { useState } from "react";
import Modal from "../components/user/Modal"; // Import your modal library or create a custom modal
import imgqr from "../assets/images/QR.png";
import "../assets/styles/Signup.css";

function Signup() {
  const [isTrustChainModalOpen, setIsTrustChainModalOpen] = useState(false);
  const _serviceProviderAddress = "0xFABB0ac9d68B0B445fB7357272Ff202C5651694a";
  const handleTrustChainSignup = () => {
    setIsTrustChainModalOpen(true);
  };
  function copyToClipboard(text) {
    const textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="login-button">Login</button>
      </form>
      <div className="or-divider">
        <span>or</span>
      </div>
      <button className="social-login-button">Login with Google</button>
      <button className="social-login-button">Login with Apple ID</button>

      <button onClick={handleTrustChainSignup}>Signup with TrustChain</button>

      {isTrustChainModalOpen && (
        <Modal
          title="TrustChain Signup"
          onRequestClose={() => setIsTrustChainModalOpen(false)}
        >
          <p>Scan the QR code or copy the following address:</p>
          <img
            src={imgqr}
            alt="TrustChain QR Code"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <p>{_serviceProviderAddress}</p>
          <button onClick={() => copyToClipboard(_serviceProviderAddress)}>
            Copy Address
          </button>
        </Modal>
      )}
    </div>
  );
}

export default Signup;
