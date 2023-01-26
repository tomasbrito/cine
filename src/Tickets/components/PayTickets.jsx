import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { startPayTickets } from "../../store/Tickets/thunks"

export const PayTickets = () => {

  const seatsSelectedSlice = useSelector(state => state.tickets.seatsSelectedSlice)
  const actualMovie = useSelector(state => state.movies.actualMovie)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onPayClick = () => {
    console.log("pagado")
    // dispatch(startPayTickets())
    // navigate('/tickets/confirmation')
  }

  useEffect(() => {
    (() => {
      'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
    })()
  }, [])


  const enviar = (event) => {
    event.preventDefault
    console.log('nashe')
  }


  return (
    <>

      <div className="container bg-light">
        <div className="row mt-2 tarjeta bg-light align-items-center justify-content-between">

          {/* pay data */}
          <div className="col-12 col-md-6">

            <h2 className="text-dark text-center display-6 mb-3">Enter your payments detail</h2>

            <form className="p-3 needs-validation" noValidate>

              <div className="row mb-3 ">
                <div className="col-6">
                  <input type="text" aria-label="First name" placeholder="First name" id="validationCustom01" required className="form-control" />
                </div>
                <div className="col-6">
                  <input type="text" aria-label="Last name" placeholder="Last name" className="form-control" />
                </div>
              </div>


              <div className="input-group my-3">
                <input type="text" className="form-control" placeholder="Adress" required aria-describedby="basic-addon1" />
              </div>
              <div className="input-group my-3">
                <input type="text" className="form-control" placeholder="Country" required aria-describedby="basic-addon1" />
              </div>
              <div className="input-group my-3">
                <input type="text" className="form-control" placeholder="State" required aria-describedby="basic-addon1" />
              </div>

              {/* Nro tarjeta */}
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-credit-card text-dark"></i>
                </span>
                <input type="number" className="form-control" placeholder="0000 0000 0000 0000" required aria-describedby="basic-addon1" />
              </div>
              {/* vencimiento y codigo */}
              <div className="row  g-0">
                <div className="col-2">
                  <input type="text" maxLength={2} aria-label="First name" placeholder="DD" required className="form-control" />
                </div>
                <div className="col-2">
                  <input type="text" maxLength={2} aria-label="First name" placeholder="MM" required className="form-control" />
                </div>
                <div className="col-2 ms-auto">
                  <input type="text" maxLength={3} aria-label="First name" placeholder="CVV" required className="form-control" />
                </div>
              </div>
              <button className="btn btn-primary mt-2"
                type="submit">
                Confirm
              </button>
            </form>
          </div>

          {/* movie data */}
          <div className="col-12 col-md-6 text-center bg-light text-dark">
            <div className="row g-0 align-items-center">

              <div className="col-6">
                <h6 className="display-6 lead mb-2">{actualMovie.title}</h6>
                <h6 className="mt-3 lead mb-1">17/01/2023</h6>
                <h6 className="lead mb-1">18:00</h6>
                <h6 className="lead mb-1">{seatsSelectedSlice.length} Tickets</h6>
                <h6 className="lead mb-1">${1000 * seatsSelectedSlice.length}</h6>
              </div>
              <div className="col-6">
                <img width={'150px'} className="img-fluid rounded" src={actualMovie.imgURL} alt="" />
              </div>
              <button
                onClick={enviar}
                className="btn btn-outline-dark mt-3"
                type="submit"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
