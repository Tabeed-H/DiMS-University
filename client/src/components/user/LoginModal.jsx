// LoginModal.js
import React, { useState } from "react";
import Modal from "react-modal";
import "../../assets/styles/LoginModal.css";

Modal.setAppElement("#root"); // Set the root element for accessibility

const LoginModal = ({ isOpen, onRequestClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email, password);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login Modal"
      className="login-modal"
      overlayClassName="modal-overlay"
    >
      <h2>Login</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <div className="or-divider">
        <span>or</span>
      </div>
      <button className="social-login-button">Login with Google</button>
      <button className="social-login-button">Login with Apple ID</button>
      <button className="social-login-button" onClick={onLogin}>
        Login with TrustChain
      </button>
    </Modal>
  );
};

export default LoginModal;
