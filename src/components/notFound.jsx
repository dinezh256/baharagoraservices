import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../images/notFound.webp";
import Footer from "./footer";

const NotFound = () => {
  return (
    <div className="errorPage fadeIn">
      <img src={NotFoundImage} alt="404 Error" />
      <h1 className="error">
        4
        <span role="img" aria-label="Sad">
          🥺
        </span>
        4
      </h1>
      <h1 className="error">Page Not Found</h1>
      <br />
      <Link to="/" className="getStartedBtn">
        <span>Back to Home</span>
      </Link>
      <Footer />
    </div>
  );
};

export default NotFound;
