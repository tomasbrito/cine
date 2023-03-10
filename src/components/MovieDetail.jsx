import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { startBuyTickets, startGetMovieByTitle } from "../store/Movies/thunks"

export const MovieDetail = () => {

  const navigate = useNavigate()
  const { title } = useParams()
  const dispatch = useDispatch()


  const { actualMovie, lastBuy } = useSelector(state => state.movies)


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


      <div className="container mt-2 text-dark">
        <div className="row mb-3">

          {/* Movie's image */}
          <div className="col-6 col-md-4">
            <img src={actualMovie.imgURL} className="card-img img-fluid" alt={actualMovie.title} />
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
            {/* Tabs content */}
            <div className="tab-content mt-3" id="myTabContent">
              {/* sinopsis */}
              <div className="tab-pane fade show active" id="sinopsis" role="tabpanel" aria-labelledby="sinopsis-tab">
                <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, est nostrum ipsum quo magnam impedit minima ab beatae obcaecati, veritatis amet vero doloribus autem fugiat hic veniam praesentium rem repudiandae.</p>
              </div>
              {/* data */}
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <ul className="list-unstyled">
                  <li><strong>Director:</strong> Carine Tardieu</li>
                  <li><strong>G??nero:</strong> Romance, Drama</li>
                  <li><strong>Duraci??n:</strong> 113 min.</li>
                  <li><strong>Calificaci??n:</strong> P-13</li>
                  <li><strong>Origen:</strong> Belgica, Francia</li>

                </ul>

              </div>
            </div>



            {/* //comprar tickets */}
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Hoy
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <button onClick={onBuyClick} className="btn btn-primary mx-2">Buy</button>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Ma??ana
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <button onClick={onBuyClick} className="btn btn-primary mx-2">Buy</button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
        <div className=" mb-2 animate__animated animate__animated">
          <button
            onClick={onBackClick}
            className="btn btn-primary">
            Back to list
          </button>

        </div>
      </div>
    </>
  )
}
