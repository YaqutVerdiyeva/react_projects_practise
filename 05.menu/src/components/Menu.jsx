import React from "react";

const Menu = ({ menuItem }) => {
  return (
    <div className="menu">
      {menuItem.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <div className="menuItem" key={id}>
            <img src={img} alt="" />
            <div className="first-text">
              <h3 className="title">{title}</h3>
              <h3 className="price">${price}</h3>
            </div>
            <h5 className="text">{desc}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
