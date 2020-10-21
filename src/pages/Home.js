import React from "react";
import twitter from "../assets/img/twitter-outlined.svg";
import github from "../assets/img/github-filled.svg";
import linkedin from "../assets/img/linkedin-in.svg";
import Button from "../components/Button";
import Particle from "../components/Particle";
import { Link } from "react-router-dom";

function Home() {
  const twitterUrl = "https://twitter.com/ikorir";
  const githubUrl = "https://github.com/hick123";

  return (
    <>
      <Particle />

      <div className="home" style={{ zIndex: 999 }}>
        <div>
          <div className="home-intro">
            <h2>I'M Isaiah Korir</h2>
            <h3>Full stack developer</h3>
            <Link to="/work">
              <Button name="Works" />
            </Link>
          </div>
          <div className="home-social">
            <img
              src={github}
              onClick={() => window.open(`${githubUrl}`)}
              alt=""
            />
            <img src={linkedin} alt="" />
            <img
              src={twitter}
              onClick={() => window.open(`${twitterUrl}`)}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
