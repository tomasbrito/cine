import { configureStore } from '@reduxjs/toolkit'
import { moviesSlice } from './Movies/moviesSlice'

export const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer
    }
})