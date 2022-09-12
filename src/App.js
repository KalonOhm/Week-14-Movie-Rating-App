import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import MovieList from './components/MovieList';

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                
                <MovieList />

            </div>
        )
    }
}

