import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        moviesList: [],
        isLoadingMovies: false,
        actualMovie: {}
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
        }

    }
});
export const { setMovies, loadingMovies, setActualMovie } = moviesSlice.actions;