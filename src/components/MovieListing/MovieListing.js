import React from 'react';
import {getAllMovies} from "../../features/movies/movieSlice";
import {useSelector} from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import './MovieListing.scss';

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    let renderMovies = "";
    debugger;
    renderMovies =
        movies.Response === 'True' ? (
            movies.Search.map((movie, index) =>{
                debugger;
              return  <MovieCard key={index} data={movie}/>
            })
        ) : (
            <div className="movies-error"><h3>{movies.Error}</h3></div>
        );
    return (

        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    {renderMovies}
                </div>
            </div>
        </div>


    );
};

export default MovieListing;