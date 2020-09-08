import React from "react";

function Button({ name, handleClick }) {
  return (
    <div className="button" onClick={handleClick}>
      {name}
    </div>
  );
}

export default Button;
