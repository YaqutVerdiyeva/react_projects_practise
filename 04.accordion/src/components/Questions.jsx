import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";

const Questions = ({ info, title }) => {
  const [icon, setIcon] = useState(false);
  return (
    <div className="questions">
      <div>
        <div className="question">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>{title}</p>

            <div className="icons" onClick={() => setIcon(!icon)}>
              {icon ? (
                <AiFillMinusCircle
                  style={{ fontSize: "30px", color: " #334155" }}
                />
              ) : (
                <AiFillPlusCircle
                  style={{ fontSize: "30px", color: " #334155" }}
                />
              )}
            </div>
          </div>
          {icon && <p className="info">{info}</p>}
        </div>
      </div>
    </div>
  );
};

export default Questions;
