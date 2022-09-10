import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

import MovieList from './components/MovieList';


//page that creates the root of the vDOM, which starts with the movielist
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <MovieList />
  //</React.StrictMode>
);

