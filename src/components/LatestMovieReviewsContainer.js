import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends React.Component {

    state = {
        reviews: []
    }

    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log("fetch latest", data.results);
            this.setState({reviews: data.results});
        })
        .catch(err => console.error("err", err));
    }

    render(){
        console.log("render Latest", this.state.reviews);
        return (
            <div className="latest-movie-reviews">
                <h1>Latest</h1>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
