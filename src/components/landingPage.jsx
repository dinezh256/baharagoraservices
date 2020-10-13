import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FiSearch, FiMessageCircle, FiClock } from "react-icons/fi";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import Footer from "./footer";
import HeroImage from "../images/landingPage.webp";
import Carpenter from "../images/sawTool.webp";
import Electrician from "../images/bulb.webp";
import Mason from "../images/trowel.webp";
import Mechanic from "../images/wheels.webp";
import Plumber from "../images/wrench.webp";
import Painter from "../images/paintRoller.webp";
import Sweep from "../images/sweep.webp";
import SaveTime from "../images/timepetrol.webp";
import GetInContact from "../images/getInContact.webp";
import Searching from "../images/searching.webp";

const LandingPage = () => {
  const [redirect1, setRedirect1] = useState(false);
  const [redirect2, setRedirect2] = useState(false);
  const [redirect3, setRedirect3] = useState(false);
  const [redirect4, setRedirect4] = useState(false);
  const [redirect5, setRedirect5] = useState(false);
  const [redirect6, setRedirect6] = useState(false);
  const [redirect7, setRedirect7] = useState(false);

  const setRedirectFn = (name) => {
    if (name === "carpenter") setRedirect1(true);
    if (name === "electrician") setRedirect2(true);
    if (name === "mason") setRedirect3(true);
    if (name === "mechanic") setRedirect4(true);
    if (name === "painter") setRedirect5(true);
    if (name === "plumber") setRedirect6(true);
    if (name === "cleaner") setRedirect7(true);
  };

  const renderRedirect = () => {
    if (redirect1) {
      return <Redirect to="/carpenter" />;
    }
    if (redirect2) {
      return <Redirect to="/electrician" />;
    }
    if (redirect3) {
      return <Redirect to="/mason" />;
    }
    if (redirect4) {
      return <Redirect to="/mechanic" />;
    }
    if (redirect5) {
      return <Redirect to="/painter" />;
    }
    if (redirect6) {
      return <Redirect to="/plumber" />;
    }
    if (redirect7) {
      return <Redirect to="/cleaner" />;
    }
  };

  return (
    <div className="landingContainer">
      <Helmet>
        <title>Baharagora Services</title>
        <meta
          name="description"
          content="Repairing, Renovation, Construction. It is just a Phone Call away."
        />
      </Helmet>
      <div className="row ">
        <div className="col-md fadeIn professionsImage">
          <img src={HeroImage} alt="professions" className="professions" />
        </div>
        <div
          className="col-md welcomeText fadeIn"
          style={{ animationDelay: "0.4s" }}
        >
          <h1 className="hero fadeInUp" style={{ animationDelay: "0.1s" }}>
            Repairing
          </h1>
          <h1 className="hero fadeInUp" style={{ animationDelay: "0.3s" }}>
            Renovation
          </h1>
          <h1 className="hero fadeInUp" style={{ animationDelay: "0.5s" }}>
            Construction
          </h1>
          <h1 className="phoneCall fadeInUp" style={{ animationDelay: "0.8s" }}>
            Just a Phone Call away
          </h1>
          <a
            href="#page2"
            className="getStartedBtn fadeInUp"
            style={{ animationDelay: "1.2s" }}
            onClick={() => navigator.vibrate(50)}
          >
            <span>Get Started</span>
          </a>
        </div>
        <div className="w-100"></div>
        <div className="col-sm page2" id="page2">
          <h3
            className="pageTwoHeading fadeIn"
            style={{ animationDelay: "1.7s" }}
          >
            Find <span>trusted local working</span> profesionals for any of your
            home project
          </h3>

          <div className="row professionTab">
            <ScrollAnimation
              animateIn="animate__bounceIn"
              className="col"
              delay="150"
            >
              <div onClick={() => setRedirectFn("carpenter")}>
                {renderRedirect()}
                <img
                  src={Carpenter}
                  alt="profImg1"
                  className="professionIcon"
                />
                <h6 className="professionBtn">
                  <span>
                    <Link to="/carpenter">carpenter</Link>
                  </span>
                </h6>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__bounceIn" className="col">
              <div onClick={() => setRedirectFn("electrician")}>
                <img
                  src={Electrician}
                  alt="profImg2"
                  className="professionIcon"
                />
                <h6 className="professionBtn">
                  <span>
                    <Link to="/electrician">electrician</Link>
                  </span>
                </h6>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__bounceIn"
              className="col"
              delay="150"
            >
              <div onClick={() => setRedirectFn("mason")}>
                <img src={Mason} alt="profImg3" className="professionIcon" />
                <h6 className="professionBtn">
                  <span>
                    <Link to="/mason">mason</Link>
                  </span>
                </h6>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__bounceIn" className="col">
              <div onClick={() => setRedirectFn("mechanic")}>
                <img src={Mechanic} alt="profImg4" className="professionIcon" />
                <h6 className="professionBtn">
                  <span>
                    <Link to="/mechanic">mechanic</Link>
                  </span>
                </h6>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__bounceIn"
              className="col"
              delay="150"
            >
              <div onClick={() => setRedirectFn("plumber")}>
                <img src={Plumber} alt="profImg5" className="professionIcon" />
                <h6 className="professionBtn">
                  <span>
                    <Link to="/plumber">plumber</Link>
                  </span>
                </h6>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__bounceIn" className="col">
              <div onClick={() => setRedirectFn("painter")}>
                <img src={Painter} alt="profImg6" className="professionIcon" />
                <h6 className="professionBtn">
                  <span>
                    <Link to="/painter">painter</Link>
                  </span>
                </h6>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__bounceIn"
              className="col"
              delay="150"
            >
              <div onClick={() => setRedirectFn("cleaner")}>
                <img src={Sweep} alt="profImg7" className="professionIcon" />
                <h6 className="professionBtn">
                  <span>
                    <Link to="/cleaner">cleaner</Link>
                  </span>
                </h6>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="w-100"></div>
        <div className="col professionType" id="page2">
          <div className="row">
            <div className="col prosImage" id="largeWidth">
              <ScrollAnimation
                animateIn="animate__zoomIn"
                duration="3"
                offset="50"
              >
                <img
                  src={GetInContact}
                  alt="Get in Contact"
                  className="getInContactImage"
                />
              </ScrollAnimation>
            </div>
            <div className="col-md-6 prosText">
              <ScrollAnimation
                animateIn="animate__fadeIn"
                duration="6"
                offset="50"
              >
                <h3>
                  <FiMessageCircle />
                </h3>
              </ScrollAnimation>
              <h2>Directly get in touch</h2>
              <h5>
                Without any middle man, contact the kind of service man you want
                with in seconds and get your job done
              </h5>
            </div>
            <div className="col-md-6 prosImage" id="smallWidth">
              <ScrollAnimation
                animateIn="animate__zoomIn"
                duration="3"
                offset="50"
              >
                <img
                  src={GetInContact}
                  alt="Get in Contact"
                  className="getInContactImage"
                />
              </ScrollAnimation>
            </div>
            <div className="w-100"></div>
            <div className="col-md-6 prosText">
              <ScrollAnimation
                animateIn="animate__fadeIn"
                duration="6"
                offset="50"
              >
                <h3>
                  <FiSearch />
                </h3>
              </ScrollAnimation>
              <h2>Search for skilled people ends here</h2>

              <h5>
                Gone are the days of searching skilled people for getting the
                job done, choose from a long list of trusted &amp; skilled
                professionals
              </h5>
            </div>
            <div className="col-md-6 prosImage">
              <ScrollAnimation
                animateIn="animate__zoomIn"
                duration="3"
                offset="50"
              >
                <img
                  src={Searching}
                  alt="SearchingEnds"
                  className="searchingImage"
                />
              </ScrollAnimation>
            </div>
            <div className="w-100"></div>
            <div className="col prosImage" id="largeWidth">
              <ScrollAnimation
                animateIn="animate__zoomIn"
                duration="3"
                offset="50"
              >
                <img
                  src={SaveTime}
                  alt="Girl Calling"
                  className="saveTimeImage"
                />
              </ScrollAnimation>
            </div>
            <div className="col-md-6 prosText">
              <ScrollAnimation
                animateIn="animate__fadeIn"
                duration="6"
                offset="50"
              >
                <h3>
                  <FiClock />
                </h3>
              </ScrollAnimation>
              <h2>
                Save time, sweat <b>&amp;</b> costly petrol
              </h2>
              <h5>
                Sitback, relax and contact the service man when you need and get
                your job done, all hassle free
              </h5>
            </div>
            <div className="col prosImage" id="smallWidth">
              <ScrollAnimation
                animateIn="animate__zoomIn"
                duration="3"
                offset="50"
              >
                <img
                  src={SaveTime}
                  alt="Girl Calling"
                  className="saveTimeImage"
                />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
      <div className="joinOurNetwork">
        <h4>Are You a Home Improvement or Service Professional?</h4>
        <h5 className="submitBtn">
          <span>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeZVVVI5DRdqKiJFQLb8eFlWl3SGhc7PYfLQ3Q6nUAI-nOQ1g/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Our Network
            </a>
          </span>
        </h5>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
