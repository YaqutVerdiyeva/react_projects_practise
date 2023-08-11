import React from "react";
import Tour from "./Tour";

const Tourlist = ({ tours, removeTour }) => {
  return (
    <div className="tours">
      {tours.map((tour) => {
        return <Tour key={tour.id} removeTour={removeTour} tour={tour} />;
      })}
    </div>
  );
};

export default Tourlist;
