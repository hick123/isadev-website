import React from "react";
import Header from "../components/Header";
import pos from "../assets/screenshots/ph-pos-1.jpg";

function Work() {
  return (
    <div className="work">
      <Header h1="Recent" span="Projects" />

      <div className="work-list">
        <div className="work-content">
          <div className="work-content-img">
            <img src={pos} alt="" />
          </div>
          <div className="work-content-text">
            <h5>Pharmacy Management System</h5>
          </div>
        </div>

        <div className="work-content">
          <div className="work-content-placeholder">Others coming soon</div>
        </div>
      </div>
    </div>
  );
}

export default Work;
