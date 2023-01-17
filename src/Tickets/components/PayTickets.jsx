import { useSelector } from "react-redux"

export const PayTickets = () => {

  const seats = useSelector(state => state.tickets.seats)
  const actualMovie = useSelector(state => state.movies.actualMovie)

  return (
    <>
      <div className="container">
        <div className="row mt-2 justify-content-between">
          <div className="col-12 col-md-4 bg-info">
            <div className="row g-0">

              <div className="col-6">
                <img width={'150px'} className="img-fluid" src={actualMovie.imgURL} alt="" />
              </div>
              <div className="col-6">
                <h6 className="display-6">{actualMovie.title}</h6>
                <h6 className="mt-3">17/01/2023</h6>
                <h6>{seats.length} Tickets:</h6>
                {seats.map(s => (<h6>{s}</h6>))}
                <h6>${1000 * seats.length}</h6>
              </div>
            </div>

          </div>
          <div className="col-12 col-md-6 bg-danger">
            botones metodo de pago
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Numero tarjeta</label>
                <input type="number" placeholder="0000 0000 0000 0000" class="form-control" id="exampleInputEmail1"/>
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
