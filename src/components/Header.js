import React from "react";

function Header({ h1, span, p }) {
  return (
    <div className="header">
      <header>
        <h1>
          {h1} <span>{span} </span>
        </h1>
        <p>{p}</p>
      </header>
    </div>
  );
}

export default Header;
