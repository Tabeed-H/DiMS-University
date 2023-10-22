// Header.js
import React from "react";
import "../../assets/styles/Header.css";

const Header = ({ user, connectedAccount }) => {
  return (
    <header className="header">
      <span className="connected-account">
        Connected Account: {connectedAccount}
      </span>
      <span className="user-name">
        {user.firstName} {user.lastName}
      </span>
    </header>
  );
};

export default Header;
