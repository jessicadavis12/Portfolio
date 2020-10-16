import React, { Component } from 'react';
import Movie from './Movie';
import MovieList from './MovieList'

class App extends Component{
  render(){
    return(
      <div className="App">
        <MovieList/>
      </div>
    )
  }
}
export default App;
