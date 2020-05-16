import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends React.Component {

    state = {
        searchTerm: "",
        reviews: []
    }

    enterSearchTerm = event => {
        this.setState({searchTerm: event.target.value});
    }

    searchForReviews = () => {
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(res => res.json())
        .then(data => {
            console.log("search data", data);
            this.setState({reviews: data.results});
        })
        .catch(err => console.error("err", err));
    }

    render(){
        return (
            <div className="searchable-movie-reviews">
                <h1>SEARCHABLE</h1>
                <input onChange={this.enterSearchTerm} value={this.state.searchTerm} />
                <button onClick={this.searchForReviews}>Search</button>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}