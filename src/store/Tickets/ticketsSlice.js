import { createSlice } from '@reduxjs/toolkit';
export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState: {
        movie: {},
        nTickets: 1,
        seatsSelectedSlice: []
    },
    reducers: {
        setTicketsSlice: (state, action) => {
            state.nTickets = action.payload.nTickets
            state.seats = action.payload.seats
        },
        setSeatsSelectedSlice: (state, action) => {
            state.seatsSelectedSlice = action.payload
        },
        setUnavailableSeats: (state, action) => {
            state.unavailableSeats = action.payload
        }
    }
});
export const { setTicketsSlice, setSeatsSelectedSlice, setUnavailableSeats } = ticketsSlice.actions;