import React, { Component } from "react";
import "./App.css";
import movie_key from "./config";
console.log(movie_key.CONFIG.TMDB_KEY);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    };
  }
  searchChangeHandler = (event) => {
    this.performSearch(event.target.value);
  };
  performSearch(searchTerm) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${movie_key.CONFIG.TMDB_KEY}&query=${searchTerm}`;
    fetch(url)
      .then((response) => response.json())
      .then((searchResults) => {
        console.log(searchResults)
        var movieRows = [];
        searchResults.results.forEach((movie) => {
          const movieRow = (
            <div key={movie.id}>
              <img alt="poster" src={movie.poster_src}></img>
              {movie.title}
            </div>
          );
          movieRows.push(movieRow);
        });
        this.setState({
          rows: movieRows,
        });
      })
      .catch((error) => console.error("error from API: ", error));
  }
  render() {
    return (
      <div>
        <div id="movieSearch">
          <h1>Movie Search</h1>
          <input
            id="inputField"
            onChange={this.searchChangeHandler}
            placeholder="Enter your movie"></input>
        </div>
        {this.state.rows}
      </div>
    );
  }
}
export default App;