/*Each movie component should contain the movie's information, the associated 
reviews, and the star rating system*/

import React, {Component} from 'react';
import Star from './Stars';
import ReviewList from './ReviewList';



export default class Movie extends Component  {
//constructor for the movie object
//image to represent movie, it's name, short blurb about plot, maybe add year, director, etc
//star rating
//review list?
constructor(props){
    super(props);
    this.state={
        moviePoster: props.moviePoster,
        movieName: props.movieName,
        movieSynopsis: props.movieSynopsis,
        /*starRating: props.starRating*/
        /*reviewsList: props.reviewsList*/
    };
}
    render() {
        return (
            <div className="container">
                <img{/* insert the moviePoster*/}/>
                <p>{this.state.movieName}</p>
                <h2>Synopsis: {this.state.movieSynopsis}</h2>

                {/*insert Stars here*/}

                {/*insert ReviewList here*/}


            </div>
        )
    }
}