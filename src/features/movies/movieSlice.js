import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {APIKey} from "../../common/api/MovieApiKey";
import movieApi from "../../common/api/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async () => {
        const movieText = "Harry";
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
        return response.data;
    }
);

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows',
    async () => {
        const seriesText = "Friends";
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`);
        return response.data;
    }
);

export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
    'movies/fetchAsyncMovieOrShowDetails',
    async (id) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
        return response.data;
    }
);
const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("fetched successfully");
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("rejected");
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log("fetched successfully");
            return {...state, shows: payload}
        },
        [fetchAsyncMovieOrShowDetails.fulfilled]: (state, {payload}) => {
            console.log("fetched successfully");
            return {...state, selectedMovieOrShow: payload}
        }
    }
});

export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
