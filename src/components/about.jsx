import React from "react";
import Footer from "./footer";
import Loader from "../common/loader";

const About = ({ image, isLoaded }) => {
  if (isLoaded)
    return (
      <div className="container">
        <div className="row">
          <div className="col aboutPage fadeIn">
            <h1 className="team">
              <img src={image} alt="teamImage" className="teamImage" />
            </h1>
            <h1>Story</h1>
            <h5>
              &emsp; &nbsp; The creators of this website are just like all
              people from Baharagora. They know how tough it is to get someone
              who can repair something on time, who can do some small
              constructions. It takes days to get a service man. Being tired
              from getting no one to do the work on time, it turned out that
              more or less everyone in Baharagora has gone through the same
              problem. With this, the idea to bring all the Service Workers
              under one roof was born.
            </h5>
            <br />
            <h5>
              &emsp; &nbsp; We have tried to get the contact details of most of
              the Construction workers, Carpenters, Electricians, Mechanic,
              Painters, Plumbers in and around Baharagora. We will try to add
              more in near future. You can reach us through{" "}
              <a href='mailto:"baharagoraservice@gmail.com"'>e-mail</a> or
              through below social media platforms.
            </h5>
            <br />
            <h5>
              Stay safe, wear a mask{" "}
              <span role="img" aria-label="mask">
                😷
              </span>
            </h5>
          </div>
        </div>
        <Footer />
      </div>
    );
  else return <Loader />;
};

export default About;
