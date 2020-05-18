// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    const { byline, headline, summary_short, link } = props
    return (
        <div
            key={headline}
            className="review"
        >
            <header>
                <a
                    className="review-link"
                    href={link.url}
                >
                    {headline}
                </a>
                <br />
                <span className="author">{byline}</span>
            </header>
            <blockquote>{summary_short}</blockquote>
        </div>
    )
}

export default MovieReviews