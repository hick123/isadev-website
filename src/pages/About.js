import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import adobeIcon from "../assets/img/services/adobe-indesign.svg";
import webIcon from "../assets/img/services/website.svg";
import serverIcon from "../assets/img/services/server.svg";
import { useHistory } from "react-router-dom";

function About() {
  let history = useHistory();
  const handleDownloadResume = async () => {
    window.open(
      `https://drive.google.com/file/d/1usvAQDiK-AyMiIv1D_dBzTVPZ5FPS3MM/view?usp=sharing`
    );
  };

  const handleHireMe = () => {
    history.push("/contact");
  };

  return (
    <>
      <Header h1="About" span="Me" />
      <div className="about">
        <div className="about-intro">
          Full Stack Web Developer
          {/* Experience with client-side programming using JavaScript frameworks &
          libraries including React js and angular js */}
        </div>
        <div className="about-resume">
          <Button name="Download Resume" handleClick={handleDownloadResume} />

          <Button name="Hire Me" handleClick={handleHireMe} />
        </div>

        <div className="about-services">
          <div className="row">
            <div className="about-services-header col-12">
              <h3>
                What <span>I Do</span>
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="about-services-container">
                <img src={adobeIcon} alt="" />
                <div className="about-services-container-content">
                  <h5>Mobile</h5>
                  <p>
                    <small>
                      I design and develop mobile applications using React
                      Native and Flutter.
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-services-container">
                <img src={webIcon} alt="" />
                <div className="about-services-container-content">
                  <h5>Frontend</h5>
                  <p>
                    {" "}
                    <small>
                      Build websites/ web applications using React, React
                      Native, Angular and Bootstrap
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-services-container">
                <img src={serverIcon} alt="" />
                <div className="about-services-container-content">
                  <h5>Back-end </h5>
                  <p>
                    {" "}
                    <small>
                      Design and building api services using Node js and Django
                      Frameworks
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
