import { loadingMovies, setMovies } from "./moviesSlice"
import { loadMovies } from '../../helpers/loadMovies'

export const startGetMovies = () => {
    return async (dispatch) => {
        dispatch(loadingMovies())
        console.log('cargando peliculas de firebase')
        const resp = await loadMovies()
        console.log('peliculas = ')
        console.log(resp)
        dispatch(setMovies(resp))
    }
}