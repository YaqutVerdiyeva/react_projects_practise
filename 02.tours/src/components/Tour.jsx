import React from "react";
import { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="tour">
      <img src={tour.image} alt="" />
      <span className="price">${tour.price}</span>
      <div className="texts">
        <h2>{tour.name}</h2>
        <p style={{ margin: "3px" }}>
          {readMore ? tour.info : `${tour.info.substr(0, 100)}...`}
        </p>
        <a className="readMore" onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show Less" : "Read More"}
        </a>
        <button
          onClick={() => removeTour(tour.id)}
          className="btn-not-interested"
        >
          Not interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
