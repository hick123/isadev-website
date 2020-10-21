import React from "react";
import Header from "../components/Header";
import { portfolios } from "../data/portfolio";
import { SRLWrapper } from "simple-react-lightbox";

function Work() {
  return (
    <div className="work">
      <Header h1="Recent" span="Projects" />

      <SRLWrapper>
        <div className="work-list">
          {portfolios.map((item, index) => {
            return (
              <div
                class="card"
                style={{
                  width: "18rem",
                  maxHeight: 180,
                  margin: "10px",
                  alignSelf: "flex-start",
                }}
              >
                <img
                  src={item.image}
                  style={{ width: "18rem", height: 180, objectFit: "contain" }}
                  class="card-img-top"
                  alt={item.name}
                />
                {/* <div class="card-body">
                <h5 class="card-title" style={{ color: "#fff" }}>
                Card title
                </h5>
                
                <a href="#" class="btn btn-primary">
                  Go somewhere
                  </a>
                </div> */}
              </div>
            );
          })}
          {/* {portfolios.map((item, index) => {
          return (
            <div className="work-item">
            <div className="work-item__img">
            <img src={item.image} alt="" />
            </div>
            <div className="work-item__text">
            <h5>Pharmacy System</h5>
            </div>
            </div>
            );
          })} */}

          {/* <div className="work-content">
          <div className="work-content-img">
          <img src={pos} alt="" /> 
          </div>
          <div className="work-content-text">
          <h5>Pharmacy Management System</h5>
          </div>
          </div>
          
          <div className="work-content">
          <div className="work-content-placeholder">Others coming soon</div>
        </div> */}
        </div>
      </SRLWrapper>
    </div>
  );
}

export default Work;
