import React from 'react';
import MovieCard from './MovieCard';
import './MovieRow.css';

function MovieRow({ title, movies, onMovieClick }) {
  return (
    <div className="movie-row">
      <h2 className="row-title">{title}</h2>
      <div className="movie-row-scroll">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
        ))}
      </div>
    </div>
  );
}

export default MovieRow; 