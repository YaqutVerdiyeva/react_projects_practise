import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Home = () => {
  const { openSideBar, openModal } = useGlobalContext();
  return (
    <div className="home-page">
      <FaBars onClick={openSideBar} className="menu" />
      <div className="btn">
        <button onClick={openModal} className="show-modal-btn">
          Show Modal
        </button>
      </div>
    </div>
  );
};

export default Home;
