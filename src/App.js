import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
const App = () => {
  const [movies, setmovies] = useState([]);
  const [search, setSearch] = useState("");

  //34c23b51
  const api_url = "https:www.omdbapi.com?apikey=34c23b51";
  const SearchMovies = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();
    setmovies(data.Search);
  };
  useEffect(() => {
    SearchMovies("Spider");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => SearchMovies(search)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
