import React from "react";
import logo from "../images/logo192.png";

const Loader = () => {
  return (
    <div className="loader">
      <img className="spinLogo" src={logo} alt="logo" />
    </div>
  );
};

export default Loader;
