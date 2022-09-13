import React, { Component } from "react";

import Movie from "./Movie";

//list of all movies we can rate/review
//container to hold multiple movies which will hold own reviews etc

export default class MovieList extends Component {
  render() {
    //establishing properties of sample movies
    let sampleMovie = {
      Poster: null,
      Title: "Movie Title",
      Director: "Steve Spiels",
      Runtime: "120 min",
      MpaRating: "NC-17",
      YearReleased: 2001,
      id: 0,
      Synopsis: "buncha text",
    };
    let sampleMovie2 = {
      Poster: null,
      Title: "Movie Title 2",
      Director: "Steve Spiels",
      Runtime: "210 min",
      MpaRating: "G",
      YearReleased: 1990,
      id: 1,
      Synopsis: "buncha text again",
    };

    //then create html. use spread operator {...} so each property 
    //can be accessed individually withing the movie component instance
    return (
      <>
        <h1 className="container">How do you feel about these movies?</h1>
        <Movie {...sampleMovie} />
        <Movie {...sampleMovie2} />
      </>
    );
  }
}
