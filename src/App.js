import React, { Suspense, lazy } from "react";
import Sidebar from "./components/Sidebar";
import "./scss/style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DonutSpinner from "./components/DonutSpinner";
import { ContextProvider } from "./ContextApi";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Work = lazy(() => import("./pages/Work"));
const Contact = lazy(() => import("./pages/Contact"));
const MobileMenu = lazy(() => import("./components/MobileMenu"));

const App = () => {
  const loading = <DonutSpinner />;

  return (
    <ContextProvider>
      <Router>
        <Suspense fallback={loading}>
          <div className="main">
            <div className="main-menu">
              <MobileMenu />
            </div>
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
              </Switch>
            </div>
          </div>
        </Suspense>
      </Router>
    </ContextProvider>
  );
};

export default App;
