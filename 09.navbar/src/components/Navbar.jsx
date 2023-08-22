import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { links, social } from "../data/data";
console.log(links);
const Navbar = () => {
  const [showPage, setShowPages] = useState(true);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowPages(!showPage);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showPage) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
      // linksRef.current.style.display = "block";
    } else {
      linksContainerRef.current.style.height = `0px`;
      // linksRef.current.style.display = "none";
    }
  }, [showPage]);

  return (
    <div className="navbar">
      <nav>
        <div className="img-menu">
          <img src={logo} alt="" />
          <FaBars className="menu" onClick={toggleLinks} />
        </div>
        <div ref={linksContainerRef}>
          <ul className="pages" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a style={{color: showPage ? "#000" : "#fff"}} href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="icons">
          {social.map((element) => {
            const { id, url, icon } = element;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
