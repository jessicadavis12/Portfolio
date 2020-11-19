import React, { Component } from "react";
import "./App.css";
import movie_key from "./config";

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
  performSearch(searchTerm){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=578ea1ee0449fd3e9231947cbcd51143&query=${searchTerm}`
    fetch(url)
    .then((response) => response.json())
    .then(searchResults => {
      let movies = searchResults.results;
      var movieRows = [];
      movies.forEach((movies)=>{
        const movieRow = (<div key={movies.id}>
                          <img alt="poster" src={`https://image.tmdb.org/t/p/w185` + movies.poster_path}></img>
                          {movies.title}
                        </div>);
              movieRows.push(movieRow)
        })
      this.setState=({rows: movieRows})
    });
  })
  .catch((error)=>{console.error('Error coming from API:', error))
  }
  render(){
    return(
      <div className="App">
        <h1>Movie Search</h1>
        < input type="text" placeholder="enter your movie"></input>
        {this.state.rows}
      </div>
    )
  }

export default App;