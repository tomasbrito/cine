import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { startBuyTickets, startGetMovieByTitle } from "../store/Movies/thunks"

export const MovieDetail = () => {

  const navigate = useNavigate()
  const { title } = useParams()
  const dispatch = useDispatch()


  const { actualMovie, lastBuy } = useSelector(state => state.movies)

  console.log(actualMovie)

  const onBackClick = () => {
    navigate('/movies')
  }

  useEffect(() => {
    dispatch(startGetMovieByTitle({ title }))
  }, [])

  const onBuyClick = () => {
    const title = actualMovie.title
    navigate(`/tickets/${title}/tickets`)
    //dispatch(startBuyTickets({ nTickets }))
  }

  


  return (
    <>
      <div className="animate__animated animate__animated">
        <button
          onClick={onBackClick}
          className="btn btn-primary">
          Back to list</button>

      </div>


      <div className="container mt-2">
        <div className="row">

          {/* Movie's image */}
          <div className="col-12 col-md-4">
            <img src={actualMovie.imgURL} className="card-img" alt={actualMovie.title} />
          </div>

          {/* Movie's data */}
          <div className="col-12 col-md-8">
            <h1 className="animate__animated animate__fadeIn display-4">{title}</h1>

            {/* Tabs */}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="sinopsis-tab" data-bs-toggle="tab" data-bs-target="#sinopsis" type="button"
                  role="tab" aria-controls="sinopsis" aria-selected="true">Sinopsis</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"
                  role="tab" aria-controls="profile" aria-selected="false">Datos</button>
              </li>
            </ul>

            <div className="tab-content mt-3" id="myTabContent">
              {/* sinopsis */}
              <div className="tab-pane fade show active" id="sinopsis" role="tabpanel" aria-labelledby="sinopsis-tab">
                <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, est nostrum ipsum quo magnam impedit minima ab beatae obcaecati, veritatis amet vero doloribus autem fugiat hic veniam praesentium rem repudiandae.</p>
              </div>
              {/* data */}
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <ul className="list-unstyled">
                  <li><strong>Director:</strong> Carine Tardieu</li>
                  <li><strong>Género:</strong> Romance, Drama</li>
                  <li><strong>Duración:</strong> 113 min.</li>
                  <li><strong>Calificación:</strong> P-13</li>
                  <li><strong>Origen:</strong> Belgica, Francia</li>

                </ul>

              </div>
            </div>



            {/* //comprar tickets */}
            <button
                className="btn btn-primary"
                onClick={onBuyClick}>
                Buy tickets
              </button>

          </div>
        </div>
      </div>
    </>
  )
}
