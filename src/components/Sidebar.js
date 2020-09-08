import React from "react";
import { NavLink } from "react-router-dom";
import homeSvg from "../assets/img/home.svg";
import aboutSvg from "../assets/img/docs.svg";
import userSvg from "../assets/img/user.svg";
import logo from "../assets/img/logo-1.svg";
import workSvg from "../assets/img/work-case.svg";
import emailSvg from "../assets/img/email-line.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink className="sidebar-navbrand" to="/">
        <img src={logo} alt="" />
      </NavLink>
      <ul className="list-group menu text-center" id="menu">
        <li className="list-group-item">
          <NavLink
            exact
            to="/"
            activeClassName="active"
            activeStyle={{
              boxShadow:
                "inset 3px 3px 3px #252528, inset -3px -3px 3px #333538",
            }}
          >
            <img src={homeSvg} alt="" />
            <span>home</span>
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink
            to="/about"
            activeClassName="active"
            activeStyle={{
              boxShadow:
                "inset 3px 3px 3px #252528, inset -3px -3px 3px #333538",
            }}
          >
            <img src={userSvg} alt="" />

            <span>about </span>
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink
            to="/resume"
            activeClassName="active"
            activeStyle={{
              boxShadow:
                "inset 3px 3px 3px #252528, inset -3px -3px 3px #333538",
            }}
          >
            <img src={aboutSvg} alt="" />

            <span>resume</span>
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink
            to="/work"
            activeClassName="active"
            activeStyle={{
              boxShadow:
                "inset 3px 3px 3px #252528, inset -3px -3px 3px #333538",
            }}
          >
            <img src={workSvg} alt="" />

            <span>works</span>
          </NavLink>
        </li>

        <li className="list-group-item">
          <NavLink
            to="/contact"
            activeClassName="active"
            activeStyle={{
              boxShadow:
                "inset 3px 3px 3px #252528, inset -3px -3px 3px #333538",
            }}
          >
            <img src={emailSvg} alt="" />

            <span>contact</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
