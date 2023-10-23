// Header.js
import React from "react";
import "../../assets/styles/Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <div className="connected-account">
        <div className="logo">TrustChain</div>
        <div className="connect-account-name">
          Connected Account: {props.connectedAccount}
        </div>
      </div>
      <span className="user-name">Hi, {props.user}</span>
    </header>
  );
};

export default Header;
