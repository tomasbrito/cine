import { createSlice } from '@reduxjs/toolkit';
export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState: {
        movie:{},
        nTickets: 1,
        seats: []
    },
    reducers: {
        setTicketsSlice: (state, action) => {
            state.nTickets = action.payload.nTickets
            state.seats = action.payload.seats
        }
    }
});
export const { setTicketsSlice } = ticketsSlice.actions;