import { async } from "@firebase/util"
import { buyTickets } from "../../helpers/buyTickets"
import { getUnavailableSeats } from "../../helpers/getUnavailableSeats"
import { setPaid, setUnavailableSeats } from "./ticketsSlice"

export const startGetSelected = () => {
    return async (dispatch, state) => {
        const resp = await getUnavailableSeats(state().movies.actualMovie)
        if (!resp.ok) return dispatch(setUnavailableSeats(resp))
        const unavailableSeats = resp.unavailableSeats
        dispatch(setUnavailableSeats(unavailableSeats))
    }
}

export const startPayTickets = () => {
    return async (dispatch, state) => {
        console.log(' en pay tickets')
        const resp = buyTickets(state().movies.actualMovie, state().tickets.seatsSelectedSlice)
        dispatch(setPaid())
    }
}