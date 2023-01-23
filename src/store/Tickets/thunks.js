import { getUnavailableSeats } from "../../helpers/getUnavailableSeats"
import { setUnavailableSeats } from "./ticketsSlice"

export const startGetSelected =  () => {
    return async (dispatch, state) => {
        const resp = await getUnavailableSeats(state().movies.actualMovie)
        if(!resp.ok) return dispatch(setUnavailableSeats(resp))
        const unavailableSeats = resp.unavailableSeats
        dispatch(setUnavailableSeats(unavailableSeats))
    }
}