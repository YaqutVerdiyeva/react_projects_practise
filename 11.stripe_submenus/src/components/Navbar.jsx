import React from "react";
import { useGlobalContext } from "../context";
import logo from "../assets/image/logo.svg";
const Navbar = () => {
  const { openSubmenu, closeSubmenu } = useGlobalContext();
  const displaysubMenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubMenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };
  return (
    <div className="navbar" onMouseOver={handleSubMenu}>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li onMouseOver={displaysubMenu}>Products</li>
          <li onMouseOver={displaysubMenu}>Developers</li>
          <li onMouseOver={displaysubMenu}>Company</li>
        </ul>
        <div className="signInBtn">
          <button>Sign In</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
