/*Each movie component should contain the movie's 
information, the associated reviews, etc*/

import React, {Component} from 'react';
import ReviewList from "./ReviewList";

export default class Movie extends Component  {
//constructor for the movie object
//image to represent movie, it's name, short blurb about plot, maybe add year, director, etc
//star rating
//review list?

//constructor and super because you have to call both 
constructor(props){
    super(props);
    //set state for each movie
    this.state={
        //moviePoster: props.moviePoster, *if i can add pictures
        movieName: props.movieName, //self explanatory
        movieSynopsis: props.movieSynopsis, //quick blurb about plot
        //starRating: , //begins count at zero
        // reviewsList: [] //empty array where reviews will sit

    };    

}

    render() {
        return (
            <div className="container">
                <img url="#"/>
                <p>{this.state.movieName}</p>
                <h2>Synopsis: {this.state.movieSynopsis}</h2>
                {/*insert ReviewList here*/}
                <div>
                    <ReviewList />
                </div>

            </div>
        )
    }
}