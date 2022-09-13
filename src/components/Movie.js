/*Each movie component should display the movie's 
information, the associated reviews, etc*/
//which was described in an object in the MovieList above

import React, { Component } from "react";
import ReviewList from "./ReviewList";

export default class Movie extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.Poster} alt="Poster for movie" />
        <div>
          <h2>{this.props.Title}</h2>
          {/* year released, rating, runtime, director */}
          <p>
            Release Year: {this.props.YearReleased}
            <br></br>
            Director: {this.props.Director}
            <br></br>
            MPA Rating: {this.props.MpaRating}
            <br></br>
            Runtime: {this.props.Runtime}
            <br></br>
          </p>
          <p>Synopsis: {this.props.Synopsis}</p>
          {/*insert ReviewList here*/}
        </div>
        <div>
          <ReviewList />
        </div>
      </div>
    );
  }
}
