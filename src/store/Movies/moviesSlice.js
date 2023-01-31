import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        moviesList: [],
        isLoading: false,
        actualMovie: {},
        lastBuy: {}
    },
    reducers: {
        setMovies: (state, action) => {
            state.moviesList = action.payload
        },
        setLoadingMoviesTrue: (state, action) => {
            state.isLoading = true
        },
        setLoadingMoviesFalse: (state, action) => {
            state.isLoading = false
        },
        setActualMovie: (state, action) => {
            state.actualMovie = action.payload
        },
        setLastBuy: (state, action) => {
            state.lastBuy = action.payload
        },
    }
});
export const { setMovies, setLoadingMoviesTrue, setLoadingMoviesFalse, setActualMovie, setLastBuy, } = moviesSlice.actions;