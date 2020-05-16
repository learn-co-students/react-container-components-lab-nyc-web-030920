// Code MovieReviews Here

import React from "react";
import MovieReview from "./MovieReview";

const MovieReviews = props => {
    console.log("reviews props", props);
    return (
        <div className="review-list">
            {props.reviews.map((review, index) => {
                console.log("review", review);
                return <MovieReview key={index} {...review} />
            })}
        </div>
    )
}

export default MovieReviews;