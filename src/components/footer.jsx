import React from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fadeIn" style={{ animationDelay: "2s" }}>
      <div className="row footer">
        <div className="col">
          <a
            href="https://www.instagram.com/baharagoraservices/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="instagramIcon" size={36} />
          </a>{" "}
          <a
            href="https://www.facebook.com/baharagoraservices/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="facebookIcon" size={36} />
          </a>{" "}
          <a
            href="https://t.me/baharagoraservices"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane className="telegramIcon" size={36} />
          </a>
        </div>{" "}
        <div className="w-100" />
        <div className="col copyright">
          <h6>© Baharagora Services</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
