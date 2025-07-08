import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import GenreChips from './components/GenreChips';
import SectionHeader from './components/SectionHeader';
import MovieRow from './components/MovieRow';
import MovieDetail from './components/MovieDetail';
import './App.css';

const API_URL = 'https://jsonfakery.com/movies/paginated';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const pagePromises = [];
    for (let i = 1; i <= 7; i++) {
      pagePromises.push(fetch(`${API_URL}?page=${i}`).then(res => res.json()));
    }
    Promise.all(pagePromises)
      .then((pages) => {
        const allMovies = pages.flatMap(page => page.data || []);
        setMovies(allMovies);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Helper to get a slice for each row
  const getRowMovies = (start) => movies.slice(start, start + 15);

  return (
    <div className="app-container">
      <Header />
      <SectionHeader title="Browse by Genre" />
      <GenreChips />
      <SectionHeader title="Binge-Worthy Shows" subtitle="Popular" />
      {loading && <div style={{color: '#fff', textAlign: 'center', marginTop: '2rem'}}>Loading movies...</div>}
      {error && <div style={{color: 'red', textAlign: 'center', marginTop: '2rem'}}>Error: {error}</div>}
      {!loading && !error && movies.length === 0 && (
        <div style={{color: '#fff', textAlign: 'center', marginTop: '2rem'}}>No movies found.</div>
      )}
      {!loading && !error && movies.length > 0 && (
        <>
          <MovieRow
            title=""
            movies={getRowMovies(0)}
            onMovieClick={setSelectedMovie}
          />
          <SectionHeader title="Most Popular in India" subtitle="Top Picks" />
          <MovieRow
            title=""
            movies={getRowMovies(15)}
            onMovieClick={setSelectedMovie}
          />
          <SectionHeader title="Trending Now" subtitle="Hot" />
          <MovieRow
            title=""
            movies={getRowMovies(30)}
            onMovieClick={setSelectedMovie}
          />
          <SectionHeader title="New Releases" subtitle="Just Arrived" />
          <MovieRow
            title=""
            movies={getRowMovies(45)}
            onMovieClick={setSelectedMovie}
          />
          <SectionHeader title="Critically Acclaimed" subtitle="Award Winners" />
          <MovieRow
            title=""
            movies={getRowMovies(60)}
            onMovieClick={setSelectedMovie}
          />
          <SectionHeader title="Action & Adventure" subtitle="Adrenaline Rush" />
          <MovieRow
            title=""
            movies={getRowMovies(75)}
            onMovieClick={setSelectedMovie}
          />
          <SectionHeader title="Comedies You'll Love" subtitle="Laugh Out Loud" />
          <MovieRow
            title=""
            movies={getRowMovies(90)}
            onMovieClick={setSelectedMovie}
          />
          <SectionHeader title="Documentaries" subtitle="True Stories" />
          <MovieRow
            title=""
            movies={getRowMovies(105)}
            onMovieClick={setSelectedMovie}
          />
          <SectionHeader title="Sci-Fi Thrillers" subtitle="Futuristic & Mind-Bending" />
          <MovieRow
            title=""
            movies={getRowMovies(120)}
            onMovieClick={setSelectedMovie}
          />
        </>
      )}
      <MovieDetail
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </div>
  );
}

export default App;
