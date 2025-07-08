import React from 'react';
import './MovieDetail.css';

function MovieDetail({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="movie-detail-overlay">
      <div className="movie-detail-modal">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="movie-detail-content">
          <img src={movie.poster_path} alt={movie.original_title} className="detail-poster" />
          <div className="detail-info">
            <h2>{movie.original_title}</h2>
            <p className="detail-description">{movie.overview}</p>
            <h3>Cast</h3>
            <div className="cast-list">
              {movie.casts && movie.casts.map((member, idx) => (
                <div className="cast-member" key={idx}>
                  <img src={member.profile_path} alt={member.name} className="cast-photo" />
                  <div className="cast-name">{member.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail; 