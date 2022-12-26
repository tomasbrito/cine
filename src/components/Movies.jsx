import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setMovies } from "../store/Movies/moviesSlice"
import { startGetMovies } from "../store/Movies/thunks"
import { MovieCard } from "./MovieCard"

export const Movies = () => {

  const dispatch = useDispatch()

  const {moviesList} = useSelector(state => state.movies)

  const onClickGetmovies = () => {
      dispatch(startGetMovies())
  }

  useEffect(() => {
    dispatch(startGetMovies())
  }, [])
  



  return (
    <>
     <button className="btn btn-primary" onClick={onClickGetmovies}>
      getMovies
     </button>
      <div className="row rows-cols-1 row-cols-md-6 g-3">

        {moviesList.map(movie => (
          <MovieCard key={movie.title} {...movie}/>
        ))}

      </div>
    </>
  )
}
