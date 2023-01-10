import { configureStore } from '@reduxjs/toolkit'
import { moviesSlice } from './Movies/moviesSlice'
import { ticketsSlice } from './Tickets/ticketsSlice'

export const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
        tickets: ticketsSlice.reducer
    }
})