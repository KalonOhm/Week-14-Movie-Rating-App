import React, {Component} from 'react';

import Movie from './Movie';
import ReviewList from './ReviewList';

export default class MovieList extends Component  {
constructor(props){
    super(props);
    this.state = {
        MovieList: [
            {
                //individual movie
            }
        ]
    }
}
addMovie = (newMovie) =>{

}


    render() {
        return (
            <div className="container"> [/* Main part of the page, container, contains list of movies*/]
                
            </div>
        );
    }
}