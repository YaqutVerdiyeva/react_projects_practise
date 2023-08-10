import React from "react";
import "./style.css";
const Button = ({ setPeople }) => {
  return (
    <div className="btn">
      <button onClick={() => setPeople([])} className="button">
        Clear All
      </button>
    </div>
  );
};

export default Button;
