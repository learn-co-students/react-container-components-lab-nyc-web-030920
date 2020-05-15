import React from 'react'

const Review = (props) => {
    return (
        <div className="review">
            <h3>{props.headline}</h3>
            <a href={props.link.url}>Go to review</a>
            <h3>Author: {props.byline}</h3>
          <p>{props.summary_short}</p>
        </div>
    )
}

export default Review;