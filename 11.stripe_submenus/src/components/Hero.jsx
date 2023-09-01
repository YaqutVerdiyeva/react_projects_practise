import React from "react";
import image from "../assets/image/phone.svg";
import { useGlobalContext } from "../context";
const Hero = () => {
  const { closeSubMenu } = useGlobalContext();
  return (
    <div className="heroPage" onMouseOver={closeSubMenu}>
      <div className="content">
        <h1>Payments infrastructure for the internet</h1>
        <p>
          Millions of companies of all sizes—from startups to Fortune 500s—use
          Stripe’s software and APIs to accept payments, send payouts, and
          manage their businesses online.
        </p>
        <button>Start now</button>
      </div>
      <div className="image">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
