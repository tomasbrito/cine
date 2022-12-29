import { loadMovies } from "./loadMovies"

export const getMovieByTitle = async (title) => {
    const moviesList = await loadMovies()
    const movie = moviesList.filter((movie) => movie.title === title)
    return movie[0]
}