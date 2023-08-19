import React from "react";
const Categories = ({ categories, filteredItems }) => {
  return (
    <div className="categories">
      {categories.map((el, i) => {
        return (
          <button
            type="button"
            className="btn"
            onClick={() => filteredItems(el)}
            key={i}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
