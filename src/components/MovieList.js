import React, {Component} from 'react';

import Movie from './Movie';
import ReviewList from './ReviewList';

//list of all movies we can rate/review
//container to hold multiple movies which will hold own reviews etc

export default class MovieList extends Component  {

    render() {
        return (
            <div className="container"> {[/* Main part of the page, container, contains list of movies*/]}
                <h1 className='container'>How do you feel about these movies?</h1>
                <Movie />
            </div>
        );
    }
}