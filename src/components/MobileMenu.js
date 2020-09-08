import React, { useContext } from "react";
import menuIcon from "../assets/img/menu-alt-1.svg";
import menuOpenIcon from "../assets/img/x.svg";
import ContextApi from "../ContextApi";
const MobileMenu = () => {
  const [open, setMenu] = useContext(ContextApi);
  return (
    <div className="menu">
      <img
        className={open ? "menu-open" : ""}
        src={open ? menuOpenIcon : menuIcon}
        onClick={() => setMenu(!open)}
        alt=""
      />{" "}
    </div>
  );
};
export default MobileMenu;
