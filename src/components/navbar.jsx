import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import logo from "../images/logo192.png";

const NavBar = () => {
  const [enableAbout, setAbout] = useState(true);

  return (
    <nav className="navBar">
      <ul>
        <li onClick={() => setAbout(true)}>
          <Link to="/">
            <h5 className="navTitle">
              <img className="logo" src={logo} alt="logo" />
              <div>
                <h4>Baharagora Services</h4>
              </div>
            </h5>
          </Link>
        </li>
        <ul style={{ flex: 1 }} />

        <li
          className="navItem"
          id="largeWidth"
          onClick={() => setAbout(!enableAbout)}
        >
          {enableAbout ? (
            <Link to="/about">
              <span className="aboutUs">About</span>
            </Link>
          ) : (
            <Link to="/">
              <span className="aboutUs">About</span>
            </Link>
          )}
        </li>
        <li
          className="aboutIcon"
          id="smallWidth"
          onClick={() => setAbout(!enableAbout)}
        >
          {enableAbout ? (
            <Link to="/about">
              <FaInfoCircle className="infoIcon" size={"30px"} />
            </Link>
          ) : (
            <Link to="/">
              <FaInfoCircle className="infoIcon" size={"30px"} />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
