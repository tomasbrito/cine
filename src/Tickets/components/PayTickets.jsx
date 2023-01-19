import { useSelector } from "react-redux"

export const PayTickets = () => {

  const seats = useSelector(state => state.tickets.seats)
  const actualMovie = useSelector(state => state.movies.actualMovie)

  return (
    <>
      <div className="container bg-light">
        <div className="row mt-2 tarjeta bg-light align-items-center justify-content-between">
          {/* datos de pago */}
          <div className="col-12 col-md-6">
            <h2 className="text-dark text-center display-6 mb-3">Enter your payments detail</h2>
            <form className="p-3">
              <div className="row mb-3 ">
                <div className="col-6">
                  <input type="text" aria-label="First name" placeholder="First name" className="form-control" />
                </div>
                <div className="col-6">
                  <input type="text" aria-label="Last name" placeholder="Last name" className="form-control" />
                </div>
              </div>


              <div className="input-group my-3">
                <input type="text" className="form-control" placeholder="Adress" aria-describedby="basic-addon1" />
              </div>
              <div className="input-group my-3">
                <input type="text" className="form-control" placeholder="Country" aria-describedby="basic-addon1" />
              </div>
              <div className="input-group my-3">
                <input type="text" className="form-control" placeholder="State" aria-describedby="basic-addon1" />
              </div>

              {/* Nro tarjeta */}
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-credit-card text-dark"></i>
                </span>
                <input type="number" className="form-control" placeholder="0000 0000 0000 0000" aria-describedby="basic-addon1" />
              </div>
              {/* vencimiento y codigo */}
              <div className="row  g-0">
                <div className="col-2">
                  <input type="text" maxLength={2} aria-label="First name" placeholder="DD" className="form-control" />
                </div>
                <div className="col-2">
                  <input type="text" maxLength={2} aria-label="First name" placeholder="MM" className="form-control" />
                </div>
                <div className="col-2 ms-auto">
                  <input type="text" maxLength={3} aria-label="First name" placeholder="CVV" className="form-control" />
                </div>
              </div>
            </form>
          </div>

          <div className="col-12 col-md-6 text-center bg-light text-dark">
            <div className="row g-0 align-items-center">

              <div className="col-6">
                <h6 className="display-6 lead mb-2">{actualMovie.title}</h6>
                <h6 className="mt-3 lead mb-1">17/01/2023</h6>
                <h6 className="lead mb-1">18:00</h6>
                <h6 className="lead mb-1">{seats.length} Tickets</h6>
                <h6 className="lead mb-1">${1000 * seats.length}</h6>
              </div>
              <div className="col-6">
                <img width={'150px'} className="img-fluid rounded" src={actualMovie.imgURL} alt="" />
              </div>
              <button className="btn btn-outline-dark mt-3">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
