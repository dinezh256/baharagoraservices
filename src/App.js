import React, { useEffect, useState, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ReactGa from "react-ga";
import NavBar from "./components/navbar";
import TeamImageAPI from "./components/teamImageAPI";
import ProfessionPageImagesAPI from "./components/professionImage";
import "./App.scss";

const LandingPage = lazy(() => import("./components/landingPage"));
const About = lazy(() => import("./components/about"));
const NotFound = lazy(() => import("./components/notFound"));
const ProfessionPage = lazy(() => import("./components/professionPage"));

function App() {
  const history = require("history").createBrowserHistory;

  const [isLoaded, setIsLoaded] = useState(false);
  const [professionsImageLoaded, setProfessionsImageLoaded] = useState(false);
  const miscImages = TeamImageAPI();
  const professionImages = ProfessionPageImagesAPI();

  const loadFunction = (object, setLoaded, key) => {
    const objImg = new Image();
    objImg.src = object[key];
    objImg.onload = () => setLoaded(true);
  };

  useEffect(() => {
    ReactGa.initialize("UA-163288419-2");
    ReactGa.pageview(window.location.pathname + window.location.search);

    loadFunction(miscImages, setIsLoaded, "notFound");
    loadFunction(professionImages, setProfessionsImageLoaded, "wavyBackground");
  }, [miscImages, professionImages]);

  const professions = [
    "carpenter",
    "cleaner",
    "mason",
    "painter",
    "plumber",
    "mechanic",
    "electrician",
  ];
  return (
    <div className="App">
      <Router history={history}>
        <NavBar />
        <Suspense fallback={<div />}>
          <Switch>
            <Route
              path="/about"
              component={() => (
                <About image={miscImages.team} isLoaded={isLoaded} />
              )}
            />
            {professions.map((item) => (
              <Route
                path={`/${item}`}
                component={() => (
                  <ProfessionPage
                    professionName={item}
                    image={professionImages[item]}
                    cardBG={professionImages["wavyBackground"]}
                    isLoaded={professionsImageLoaded}
                  />
                )}
              />
            ))}
            <Route
              path="/notfound"
              component={() => (
                <NotFound image={miscImages.notFound} isLoaded={isLoaded} />
              )}
            />
            <Route exact path="/" component={LandingPage} />
            <Redirect to="/notfound" />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
