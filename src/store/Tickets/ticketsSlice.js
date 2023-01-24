import { createSlice } from '@reduxjs/toolkit';
export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState: {
        movie: {},
        nTickets: 1,
        seatsSelectedSlice: [],
        paid: false
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
        },
        setPaid: (state, action) => {
            console.log('sliceeee')
            //state.paid = action.payload 
        }
    }
});
export const { setTicketsSlice, setSeatsSelectedSlice, setUnavailableSeats, setPaid } = ticketsSlice.actions;