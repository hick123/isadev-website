import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import homeSvg from "../assets/img/home.svg";
import userSvg from "../assets/img/user.svg";
import logo from "../assets/img/logo-1.svg";
import workSvg from "../assets/img/work-case.svg";
import emailSvg from "../assets/img/email-line.svg";
import ContextApi from "../ContextApi";

function Sidebar() {
  const [open, setMenu] = useContext(ContextApi);

  const handleClose = () => {
    if (open) {
      setMenu(!open);
    }
  };

  return (
    <div className={`sidebar ${open ? "sidebar-mobile-open" : ""}`}>
      <NavLink className="sidebar-navbrand" to="/">
        <img src={logo} alt="" />
      </NavLink>
      <ul className="list-group menu text-center" id="menu">
        <li className="list-group-item">
          <NavLink exact to="/" activeClassName="active" onClick={handleClose}>
            <img src={homeSvg} alt="" />
            <span>home</span>
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/about" activeClassName="active" onClick={handleClose}>
            <img src={userSvg} alt="" />

            <span>about </span>
          </NavLink>
        </li>

        <li className="list-group-item">
          <NavLink to="/work" activeClassName="active" onClick={handleClose}>
            <img src={workSvg} alt="" />

            <span>works</span>
          </NavLink>
        </li>

        <li className="list-group-item">
          <NavLink to="/contact" activeClassName="active" onClick={handleClose}>
            <img src={emailSvg} alt="" />

            <span>contact</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
