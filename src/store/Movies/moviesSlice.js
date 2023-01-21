import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        moviesList: [],
        isLoadingMovies: false,
        actualMovie: {},
        lastBuy: {}
},
    reducers: {
        setMovies: (state, action ) => {
            state.isLoadingMovies = false
            state.moviesList = action.payload
        },
        loadingMovies: (state) => {
            state.isLoadingMovies = true
        },
        setActualMovie: (state, action) => {
            state.actualMovie = action.payload
            state.isLoadingMovies = false
        },
        setLastBuy: (state, action) => {
            state.lastBuy = action.payload
        },
    }
});
export const { setMovies, loadingMovies, setActualMovie, setLastBuy,} = moviesSlice.actions;