import React, { useState } from "react";
import { FaAddressBook, FaArrowLeft, FaUpload } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { HashLink as Link } from "react-router-hash-link";
import dataAPI from "../API/apiCall";
import ProfileCard from "./profileCard";
import Footer from "./footer";
import Loader from "../common/loader";

const ProfessionPage = ({ professionName, image, isLoaded, cardBG }) => {
  const { professionData } = dataAPI();

  let finalData = [];

  if (professionData) finalData = professionData[professionName];

  const [profileCard, setProfileCard] = useState("");

  const handleClick = (item) => {
    if (item) setProfileCard(item);
  };

  if (finalData.length !== 0 && isLoaded) {
    return (
      <div className="professionPage">
        <Helmet>
          <title className="helmetTitle">
            {professionName} - Baharagora Services
          </title>
          <meta
            name="description"
            content={`Get in touch with a ${professionName}`}
          />
        </Helmet>
        <div className="row">
          <div className="col-md professionAvatar">
            <ProfessionImg sourceImage={image} />
            <ProfessionName name={professionName} />
          </div>
          <div className="col-md tableContent">
            <div className="mainTable fadeIn" style={{ animationDelay: "1s" }}>
              <div className="hintText">
                <h6>
                  <FaAddressBook size={20} className="colorChange" /> Shows all
                  details
                </h6>
                <ul style={{ flex: "2" }} />
                <h6 className="backBtn">
                  <span>
                    <Link to="/#page2">
                      <FaArrowLeft /> &nbsp; Back
                    </Link>
                  </span>
                </h6>
              </div>
              <table className="table table-borderless table-sm table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Rate/Day</th>
                  </tr>
                </thead>
                {finalData.map((item) => (
                  <tr
                    className="tableRow"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={() => handleClick(item)}
                  >
                    <td className="nameColumn">
                      <h6 className="name">
                        {item.FirstName} {item.LastName}
                      </h6>
                      <h6>
                        <span
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                          onClick={() => handleClick(item)}
                        >
                          <FaAddressBook size={20} className="tapInfo" />
                        </span>
                      </h6>
                    </td>
                    <td>{item.Address}</td>
                    <td>{item.FeesPerDay}</td>
                  </tr>
                ))}
              </table>
              <h5 className="submitDetails">
                Are You a Home Improvement or Service Worker?
                <h6 className="submitBtn">
                  <span>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeZVVVI5DRdqKiJFQLb8eFlWl3SGhc7PYfLQ3Q6nUAI-nOQ1g/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Submit Details &nbsp;
                      <FaUpload className="uploadIcon" />
                    </a>
                  </span>
                </h6>
              </h5>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <ProfileCard
                    workerProfile={profileCard}
                    background={cardBG}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default ProfessionPage;

const ProfessionImg = ({ sourceImage }) => {
  return <img src={sourceImage} alt="profession" className="carpenter" />;
};

const ProfessionName = ({ name }) => {
  return <h2 className="professionNameAnimation professionName">{name}</h2>;
};
