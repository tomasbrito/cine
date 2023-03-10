import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startGetMovies } from "../store/Movies/thunks"
import { MovieCard } from "./MovieCard"

export const Movies = () => {

  const dispatch = useDispatch()

  const { moviesList } = useSelector(state => state.movies)
  const { isLoading } = useSelector(state => state.movies)

  useEffect(() => {
    dispatch(startGetMovies())
  }, [])



  return (
    <>
      <div className="container mb-3">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6">

          {moviesList.map(movie => (
            <MovieCard key={movie.title} {...movie} />
          ))}

        </div>
      </div>
    </>
  )
}
