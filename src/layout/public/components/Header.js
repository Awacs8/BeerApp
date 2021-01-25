import React from "react";
import "../../../utils/style.css";
import logo from "../../../utils/img/brewdog-logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
    </div>
  );
};
export default Header;
