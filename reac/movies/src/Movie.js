import React, { Component } from 'react';
import './Movie.css'
class Movie extends Component{
    render(){
        const {title, img, director}=this.props;
        const cast = this.props.cast.map((cas, index)=>(
        <li key={index}>{cas}</li>
        ));
        return(
            <div className="movie-card">
                <div className="movie-card-image">
                    <img src={img} alt={title}/>
                </div>
                <div className="movie-card-content">
                    <h3 className="movie-title">{title}</h3>
                    <div>Directed by: {director}</div>
                    <h3>Cast</h3>
                    <ul>
                        {cast}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Movie;