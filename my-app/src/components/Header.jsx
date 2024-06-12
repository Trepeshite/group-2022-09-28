import React from "react";
import logo from "../assets/images/logo.svg";

const Header = () => {


  return (
    <header className="header">
      <img src={logo} className="react-logo" alt="logo" width={40} height={40}/>
      <h3>Dima Shevchuk - React apps</h3>
    </header>
  );
};

export default Header;
