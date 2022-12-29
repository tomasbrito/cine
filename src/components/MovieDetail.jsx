import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { buyTickets } from "../helpers/buyTickets"
import { startBuyTickets, startGetMovieByTitle } from "../store/Movies/thunks"

export const MovieDetail = () => {

  const navigate = useNavigate()
  const { title } = useParams()
  const dispatch = useDispatch()
  const [nTickets, setNTickets] = useState(1)

  const { actualMovie } = useSelector(state => state.movies)

  console.log(actualMovie)

  const onBackClick = () => {
    navigate(-1)
  }

  useEffect(() => {
    dispatch(startGetMovieByTitle({ title }))
  }, [])

  const onBuyClick = () => {
    console.log(nTickets + ' tickets bought')
    dispatch(startBuyTickets({ nTickets }))
  }

  const onTicketsChange = (event) => {
    setNTickets(event.target.value)
  }


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

                <div className="mb-3 form-group">
                  <label form="exampleFormControlSelect1">Tickets</label>
                  <select className="form-control" onChange={onTicketsChange} id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={onBuyClick}>
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
