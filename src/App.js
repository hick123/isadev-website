import React from "react";
import Sidebar from "./components/Sidebar";
import "./scss/style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <Router>
      <div className="main">
        <div className="main-sidebar">
          <Sidebar />
        </div>
        <div className="main-wrapper">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>{" "}
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            {/* <Route exact path="/services">
              <Services />
            </Route> */}
            {/* <Route exact path="/">
              <Home />
            </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
