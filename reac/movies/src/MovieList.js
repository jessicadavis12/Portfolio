import React, { Component } from 'react';
import './MovieList.css'
import Movie from './Movie';

class MovieList extends Component {
    static defaultProps = {
        movies:[
            {
                title:"Pulp Fiction",
                director:"Quentin Tarantino", 
                cast:["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
                img:"https://i.imgur.com/lut5eCG.jpg"
            },
            {
                title:"The Hateful Eight",
                director:"Quentin Tarantino", 
                cast:["Samuel L Jackson", "Kurt Russel", "Jennifer Jason Leigh"],
                img:"https://i.imgur.com/H0IjvHG.jpg"
            },
            {
                title:"Once Upon a Time...In Hollywood",
                director:"Quention Tarantino", 
                cast:["Leonardo DiCaprio", "Brad Pitt", "Margo Robbie"],
                img:"https://i.imgur.com/BYAMGYR.jpg"
            }
        ]
    }
    render(){
        const movies = this.props.movies.map((r, index)=>(
            <Movie key={index}{...r}/>
        ))
        return(
            <div className="movie-list">
                {movies}
            </div>
        )
    }
}
export default MovieList;