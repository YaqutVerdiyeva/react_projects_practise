import React from "react";
import image from "../assets/logo.svg";
import { useGlobalContext } from "../context";
import { social, links } from "../data/data";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { sideBar, closeSideBar } = useGlobalContext();
  return (
    <div className={`${sideBar ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="img-menu">
        <img src={image} alt="" />
        <FaTimes className="fatimes" onClick={closeSideBar} />
      </div>
      <ul className="pages">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li className="page-link" key={id}>
              <span className="page-icons"> {icon}</span>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
      <ul className="icons">
        {social.map((el) => {
          const { id, url, icon } = el;
          return (
            <li className="social-icon" key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
