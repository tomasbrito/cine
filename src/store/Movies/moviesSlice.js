import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        moviesList: [],
        isLoadingMovies: false
},
    reducers: {
        setMovies: (state, action ) => {
            console.log('set movies')
            state.isLoadingMovies = false
            state.moviesList = action.payload
        },
        loadingMovies: (state) => {
            state.isLoadingMovies = true
        }
    }
});
export const { setMovies, loadingMovies } = moviesSlice.actions;