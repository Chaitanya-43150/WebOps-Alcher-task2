import React from 'react';
import './GenreChips.css';

const genres = [
  'Action', 'Animation', 'Comedy', 'Crime', 'Descriptive Audio', 'Documentary',
  'Drama', 'En Espanol', 'Horror', 'Music', 'Romance', 'Sci-Fi', 'Thriller'
];

function GenreChips() {
  return (
    <div className="genre-chips-row">
      {genres.map((genre, idx) => (
        <button className="genre-chip" key={idx}>{genre}</button>
      ))}
    </div>
  );
}

export default GenreChips; 