import React, { useState } from "react";
import reviews from "../data/data";
import { PiQuotesFill } from "react-icons/pi";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkReviews = (num) => {
    if (num > reviews.length - 1) {
      return 0;
    }
    if (num < 1) {
      return reviews.length - 1;
    }
    return num;
  };
  const prevReview = () => {
    setIndex(checkReviews(index - 1));
  };
  const nextReview = () => {
    setIndex(checkReviews(index + 1));
  };
  const randomRewievs = () => {
    let randomNumber = Math.round(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkReviews(randomNumber));
  };
  console.log(reviews);
  return (
    <div className="reviews">
      <div className="image">
        <img className="photo" src={image} alt="" />
        <PiQuotesFill className="icon" />
      </div>
      <h2>{name}</h2>
      <h3>{job}</h3>
      <p>{text}</p>
      <div className="icons">
        <AiOutlineLeft onClick={prevReview} className="AiOutlineLeft" />
        <AiOutlineRight onClick={nextReview} className="AiOutlineRight" />
      </div>
      <button onClick={() => randomRewievs()} className="btn-suprize">
        Suprize Me
      </button>
    </div>
  );
};

export default Reviews;
