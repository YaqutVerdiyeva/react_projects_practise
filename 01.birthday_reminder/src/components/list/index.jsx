import React from "react";
import "./style.css";
const List = ({ people }) => {
  return (
    <div>
      {people.map((elem) => {
        return (
          <div className="listItem" key={elem.id}>
            <img src={elem.image} alt="" />
            <div className="text">
              <h3>{elem.name}</h3>
              <h4>{elem.age} years</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
