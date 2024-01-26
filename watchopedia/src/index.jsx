import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Layouts/Header';
import Counter from './Components/Counter';
import MoviePage from './Components/MoviePage/MoviePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <div className="p2 m-2 row text-center">
      <Counter/>
      <MoviePage/>
    </div>
  </React.StrictMode>
);
