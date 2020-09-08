import React from "react";
import Particles from "react-particles-js";

import twitter from "../assets/img/twitter-outlined.svg";
import github from "../assets/img/github-filled.svg";
import linkedin from "../assets/img/linkedin-in.svg";
import Button from "../components/Button";

function Home() {
  const twitterUrl = "https://twitter.com/ikorir";
  const githubUrl = "https://github.com/hick123";

  return (
    <>
      <Particles
        height="100vh"
        width="100vw"
        style={{ zIndex: -1 }}
        params={{
          particles: {
            number: {
              value: 8,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 1,
              out_mode: "out",
            },
            shape: {
              type: ["image", "circle"],
              image: [
                {
                  src: "../assets/img/favicon-32x32.png",
                  height: 20,
                  width: 23,
                },
                {
                  src: "/k8s.2d579d24.svg",
                  height: 20,
                  width: 20,
                },
                {
                  src: "/code.b3b4c4f4.png",
                  height: 20,
                  width: 20,
                },
              ],
            },
            color: {
              value: "#ccc",
            },
            size: {
              value: 20,
              random: true,
              anim: {
                enable: true,
                speed: 4,
                size_min: 10,
                sync: false,
              },
            },
          },
          retina_detect: false,
        }}
      />

      <div className="home">
        {/* <div id="particles-js"></div> */}
        <div>
          <div className="home-intro">
            <h2>I'M Isaiah Korir</h2>
            <h3>Full stack developer</h3>
            <Button name="Works" />
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

        {/* <div className="home-pic col-md-6">
          <img src={bg} alt="" />
        </div> */}
      </div>
    </>
  );
}

export default Home;
