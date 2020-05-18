import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const BASE_URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        search: ''
    }

    handleSearchInputChange = event =>
    this.setState({ search: event.target.value });

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(BASE_URL.concat(this.state.search))
        .then(res => res.json())
        .then(res => this.setState({
            reviews: res.results
        }))
    }

    render() {
        console.log('Search state: ', this.state.search)
        return (
            <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Search Movie Reviews</label>
          <input
            id="search-input"
            type="text"
            style={{ width: 300 }}
            value={this.state.search}
            onChange={this.handleSearchInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
          {this.state.reviews.map((review, index) => <MovieReviews {...review} key={index}/>)}
        {/* <MovieReviews reviews={this.state.reviews} /> */}
      </div>
        )
    }
}