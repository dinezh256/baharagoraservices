import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookSquare,
  FaEnvelope,
  FaWhatsapp,
  FaStore,
  FaTimesCircle,
} from "react-icons/fa";

const ProfileCard = ({ workerProfile, background }) => {
  return (
    <div
      className="contactDetails"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h2 className="closeIcon">
        <span className="closeIcon" data-dismiss="modal">
          <FaTimesCircle size={24} />
        </span>
      </h2>
      <h2 className="contactName">
        {workerProfile.FirstName} {workerProfile.LastName}
      </h2>
      <br />
      <h5 className="contactNumber">
        {workerProfile.WhatsApp ? (
          <span>
            <a
              href={`https://wa.me/91${workerProfile.WhatsApp}?text=I%20have%20some%20work%20for%20you`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="whatsappIcon" />
              &nbsp; {workerProfile.WhatsApp}
            </a>
          </span>
        ) : (
          ""
        )}

        <span>
          <a
            href={`tel:${workerProfile.PhoneNo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhoneAlt className="phoneIcon" />
            &nbsp; {workerProfile.PhoneNo}
          </a>
        </span>
      </h5>
      <br />
      <h5 className="contactAddress">
        <span>
          <FaMapMarkerAlt className="mapIcon" />
          &nbsp; {workerProfile.Address}
        </span>
      </h5>

      {workerProfile.HasShop ? (
        <h5 className="shopAddress">
          <span>
            <FaStore className="shopIcon" />
            &nbsp; {workerProfile.ShopAddress}
          </span>
        </h5>
      ) : (
        ""
      )}
      <br />
      <h4 className="facebookBtn">
        {workerProfile.Facebook && (
          <span>
            <a
              href={workerProfile.Facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="fbIcon" />
              &nbsp; Facebook
            </a>
          </span>
        )}
        {workerProfile.Email && (
          <span className="mailBtn">
            <a
              href={`mailto:${workerProfile.Email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="mailIcon" />
              &nbsp; Send a mail
            </a>
          </span>
        )}
      </h4>
      <br />
      <h5 className="contactCharge">
        Charge: Rs. {workerProfile.FeesPerDay}/day{" "}
        <span className="contactJobType">({workerProfile.JobType})</span>
      </h5>
    </div>
  );
};

export default ProfileCard;
