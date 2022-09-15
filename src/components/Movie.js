/*Each movie component should display the movie's 
props(properties), the associated reviews, etc*/
//which was described in an object in the MovieList above

import React, { Component } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

export default class Movie extends Component {
  myfunc(data){
      console.log(`This is my data, ${data}`)
  }  
  
  render() {
    return (
      <div className="card">
        <h2>{this.props.Title}</h2>
        <img src={this.props.Poster} alt="Poster for movie" />
        <div>
          
          {/* year released, rating, runtime, director */}
          <ul>
            <li>Release Year: {this.props.YearReleased}</li>
            
            <li>Director: {this.props.Director}</li>
            
            <li>MPA Rating: {this.props.MpaRating}</li>
            
            <li>Runtime: {this.props.Runtime}</li>
            
          </ul>
          <p>Synopsis: {this.props.Synopsis}</p>
          
        </div>
        <div>
          <ReviewForm myfunc={(myData) => this.myfunc(myData)}/>
        </div>
        <div>{/*insert ReviewList here*/}
          <ReviewList />
        </div>
      </div>
    );
  }
}
