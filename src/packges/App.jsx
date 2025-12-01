import React, { useState, useEffect } from "react";
import movieListData from "./assets/movieListData.json";
import MovieList from "./assets/MovieList";
import "./app.css";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieListData.results);
  }, []);

  return (
    <div className="">
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
