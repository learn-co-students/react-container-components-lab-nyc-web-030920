import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: []
  }

  handleSearch = (event) => {
      console.log(event.target.value)
      this.setState({ searchTerm: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.getReview()
  }

  getReview = () => {
    fetch(URL+"&query="+this.state.searchTerm)
      .then((res) => res.json())
      .then((res) => this.setState({ reviews: res.results }))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search Movie Reviews</label>
          <input
            type="text"
            onChange={this.handleSearch}
          />
          <button type="submit">Search</button>
        </form>
        {(this.state.reviews.length > 0)  ?
        <div>
            <h1>Search Results</h1>
            <MovieReviews reviews={this.state.reviews}/> 
        </div> : null}
      </div>
    );
  }
}
