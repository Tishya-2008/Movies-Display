import './App.css';
import Movie from "./Movie";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [click, setClick] = useState(false);
  const url = "https://swapi.dev/api/films/?format=json";

  async function getUrl() {
    setClick(true)
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
    console.log(data.results);
  }

  return (
    <div className="container">
      <h1 className="title">List of Movies</h1>
      <div className="grid-container">
        {movies.map((movie, index) => (
          <div key={index} className="grid-item">
            <div className="movie-box">
              <h4 className="movie-title">{movie.title}</h4>
              <h5>Director: {movie.director}</h5>
              <h5>Producer(s): {movie.producer}</h5>
              <h6>Summary: {movie.opening_crawl}</h6>
              <h6>Release data: {movie.release_date}</h6>
            </div>
          </div>
        ))}
      </div>
      <Movie getUrl={getUrl} Movies = {movies} Clicked = {click}/>
    </div>
  );
}

export default App;