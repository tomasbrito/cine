import { loadingMovies, setActualMovie, setMovies } from "./moviesSlice"
import { loadMovies } from '../../helpers/loadMovies'
import { getMovieByTitle } from "../../helpers/getMovieByTitle"

export const startGetMovies = () => {
    return async (dispatch) => {
        console.log('buscando todas')
        // dispatch(loadingMovies())
        const resp = await loadMovies()
        dispatch(setMovies(resp))
    }
}

export const startGetMovieByTitle = ({title}) => {
    return async (dispatch) => {
        console.log('buscando movie by title')
        // dispatch(loadingMovies())
        const resp = await getMovieByTitle(title)
        dispatch(setActualMovie(resp))
    }
}