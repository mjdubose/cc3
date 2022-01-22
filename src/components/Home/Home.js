import React, {useEffect} from 'react';
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/api/movieApi";
import {APIKey} from "../../common/api/MovieApiKey";

const Home = () => {

    useEffect(()=>{
        const fetchMovies=async ()=>{
const response = await movieApi.get(``);
        }
    })
    return (<div>
            <div className="banner-img"></div>
            <MovieListing/>
        </div>
    )

};

export default Home;