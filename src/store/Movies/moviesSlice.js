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
            console.log('set movies')
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
            console.log('buy ticjets en slice')
            state.lastBuy = action.payload
        }

    }
});
export const { setMovies, loadingMovies, setActualMovie, setLastBuy } = moviesSlice.actions;