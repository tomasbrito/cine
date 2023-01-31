import {  setActualMovie, setLastBuy, setMovies } from "./moviesSlice"
import { loadMovies } from '../../helpers/loadMovies'
import { getMovieByTitle } from "../../helpers/getMovieByTitle"
import { buyTickets } from "../../helpers/buyTickets"
import { setUnavailableSeats } from "../Tickets/ticketsSlice"

export const startGetMovies = () => {
    return async (dispatch) => {
        // dispatch(loadingMovies())
        dispatch(setUnavailableSeats(null))
        const resp = await loadMovies()
        dispatch(setMovies(resp))
    }
}

export const startGetMovieByTitle = ({title}) => {
    return async (dispatch) => {
        // dispatch(loadingMovies())
        const resp = await getMovieByTitle(title)
        dispatch(setActualMovie(resp))
    }
}

export const startBuyTickets = ({nTickets}) => {
    return async (dispatch , state) => {
        const resp = await buyTickets(state().movies.actualMovie, nTickets)
        if(!resp.ok) return dispatch(setLastBuy(resp)) ;
        const lastBuy = {
            movieId : resp.actualMovie.id,
            movieTitle: resp.actualMovie.title,
            nTickets: resp.nTickets
        }

        dispatch(setLastBuy(lastBuy))
    } 
}