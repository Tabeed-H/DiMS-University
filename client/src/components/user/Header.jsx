// Header.js
import React from "react";
import "../../assets/styles/Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <span className="connected-account">
        Connected Account: {props.connectedAccount}
      </span>
      <span className="user-name">{props.user}</span>
    </header>
  );
};

export default Header;
