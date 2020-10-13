import React, { useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ReactGa from "react-ga";
import NavBar from "./components/navbar";
import "./App.scss";

const LandingPage = lazy(() => import("./components/landingPage"));
const About = lazy(() => import("./components/about"));
const NotFound = lazy(() => import("./components/notFound"));
const ProfessionPage = lazy(() => import("./components/professionPage"));

function App() {
  const history = require("history").createBrowserHistory;

  useEffect(() => {
    ReactGa.initialize("UA-163288419-2");
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

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
            <Route path="/about" component={About} />
            {professions.map((item) => (
              <Route
                path={`/${item}`}
                component={() => <ProfessionPage professionName={item} />}
              />
            ))}
            <Route path="/notfound" component={NotFound} />
            <Route exact path="/" component={LandingPage} />
            <Redirect to="/notfound" />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
