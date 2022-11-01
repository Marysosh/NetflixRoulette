import React from "react";
import "./Logo.scss";
import logo from "./logo.png";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
