// Code MovieReviews Here
import React from "react";
import Review from "./Review";

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map((review, index) => <Review key={index} {...review} />)}
    </div>
  );
};

export default MovieReviews;
