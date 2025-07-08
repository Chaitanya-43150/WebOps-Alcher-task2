import React from 'react';
import './MovieCard.css';

function MovieCard({ movie, onClick }) {
  // Demo: Show 'LIVE' badge for every 3rd card, random progress for all
  const isLive = movie.id && parseInt(movie.id.replace(/\D/g, ''), 10) % 3 === 0;
  const progress = isLive ? Math.floor(Math.random() * 100) : null;

  return (
    <div className="movie-card" onClick={() => onClick(movie)}>
      <img src={movie.poster_path} alt={movie.original_title} className="movie-poster" />
      {isLive && <div className="live-badge">LIVE</div>}
      <div className="movie-title-overlay">{movie.original_title}</div>
      {progress !== null && (
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  );
}

export default MovieCard; 