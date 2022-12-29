import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { startGetMovieByTitle } from "../store/Movies/thunks"

export const MovieDetail = () => {

  const navigate = useNavigate()
  const { title } = useParams()
  const dispatch = useDispatch()

  const { actualMovie } = useSelector(state => state.movies)

  console.log(actualMovie)

  const onBackClick = () => {
    navigate(-1)
  }

  useEffect(() => {
    dispatch(startGetMovieByTitle({ title }))
  }, [])


  return (
    <>
      <div className="animate__animated animate__animated">
        <button
          onClick={onBackClick}
          className="btn btn-primary">
          Back to list</button>

      </div>


      <div className="col animate__animated animate__fadeIn mt-2">
        <div className="card">
          <div className="row no-gutters">

            <div className="col-4">
              <img src={actualMovie.imgURL} className="card-img" alt={actualMovie.title} />
            </div>

            <div className="col-8">
              <div className="card-body">

                <h5 className="card-title">{actualMovie.title}</h5>
                <p className="bg-white">{actualMovie.tickets}</p>
                <button
                  className="btn btn-primary">
                  Buy tickets
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
