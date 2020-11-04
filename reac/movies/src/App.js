import React, { Component } from 'react';
import Movie from './Movie';
import MovieList from './MovieList'

class App extends Component{
  constructor(props){
    super(props)
    const movies = [
      {id: 0, poster_src: "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", title: "Avengers: Infinity War", overview: "The Avengers fight Thanos."},
       {id: 1, poster_src: "https://image.tmdb.org/t/p/w185/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg", title: "The Avengers", overview: "The Avengers fight Loki."}
    ]
   
  }
  performSearch(searchTerm){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=578ea1ee0449fd3e9231947cbcd51143&query=${searchTerm}`
    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(searchResults => {
      let movies = searchResults.results;
      var movieRows = [];
      movies.forEach((movies)=>{
        const movieRow = <div key={movies.id}>
                          <img alt="poster" src={`https://image.tmdb.org/t/p/w185` + movies.poster_path}></img>
                          {movies.title}
                        </div>
              movieRows.push(movieRow)
      })
      this.state=({rows: movieRows})
    })
    .catch(error=>{console.error('Error coming from API:', error)
  })
  }
  render(){
    return(
      <div className="App">
        <h1>Movie Search</h1>
        < input type="text" placeholder="enter your movie"></input>
        {this.state.rows}
        <MovieList/>
      </div>
    )
  }
}
export default App;