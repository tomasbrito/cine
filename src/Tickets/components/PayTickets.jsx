import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { startPayTickets } from '../../store/Tickets/thunks'

export const PayTickets = () => {

  const seatsSelectedSlice = useSelector(state => state.tickets.seatsSelectedSlice)
  const actualMovie = useSelector(state => state.movies.actualMovie)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onPayClick = () => {
    const form = document.getElementById('form1')
    if (!form.checkValidity()) return
    dispatch(startPayTickets())
    navigate('/tickets/confirmation')
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

  const validateNumber = (event) => {
    if (!/^[0-9]+$/i.test(event.key)) {
      if (event.key !== 'Backspace') {
        event.preventDefault()
      } else {
        event.target.value = event.target.value.trim()
      }

    } else {
      console.log(event.target.value.length)
      if (event.target.value.length === 4 || event.target.value.length === 9 || event.target.value.length === 14) {
        event.target.value = event.target.value + ' '
      }
    }
  }

  const validateCvv = (event) => {

    if (!/^[0-9]+$/i.test(event.key)) {
      if (event.key !== 'Backspace') {
        event.preventDefault()
      }
    }
  }

  return (
    <>

      <div className="container bg-light">
        <div className="row mt-2 tarjeta bg-light align-items-center justify-content-between">

          {/* pay data */}
          <div className="col-12 col-md-6">

            <h2 className="text-dark text-center display-6 mb-3">Enter your payments detail</h2>

            <form className="p-3 needs-validation" id="form1" noValidate>

              {/* First and last name */}
              <div className="row mb-3 ">
                <div className="col-6">
                  <input defaultValue={'Tomas'} type="text" aria-label="First name" placeholder="First name" id="validationCustom01" required className="form-control" />
                </div>
                <div className="col-6">
                  <input defaultValue={'Brito'} type="text" aria-label="Last name" placeholder="Last name" required className="form-control" />
                </div>
              </div>


              <div className="input-group my-3">
                <input type="text" className="form-control" placeholder="Adress" required aria-describedby="basic-addon1" />
              </div>
              <div className="input-group my-3">
                <input defaultValue={'Argentina'} type="text" className="form-control" placeholder="Country" required aria-describedby="basic-addon1" />
              </div>
              <div className="input-group my-3">
                <input defaultValue={'Bs As'} type="text" className="form-control" placeholder="State" required aria-describedby="basic-addon1" />
              </div>

              {/* Nro tarjeta */}
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-credit-card text-dark"></i>
                </span>
                <input onKeyDown={validateNumber} maxLength={19} minLength={19} type="text" className="form-control" placeholder="0000 0000 0000 0000" required aria-describedby="basic-addon1" />
              </div>
              {/* vencimiento y codigo */}
              <div className="row  g-0">

                <div className="col-2">
                  <select className="form-select" id="validationCustom04" required>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                </div>

                <div className="col-3">
                  <select className="form-select" id="validationCustom05" required>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                    <option>2029</option>
                    <option>2030</option>
                    <option>2031</option>
                    <option>2032</option>
                    <option>2033</option>
                    <option>2034</option>
                    <option>2035</option>
                  </select>
                </div>

                <div className="col-2 ms-auto">
                  <input onKeyDown={validateCvv} type="text" maxLength={3} minLength={3} placeholder="CVV" required className="form-control" />
                </div>

              </div>
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
                className="btn btn-outline-dark mt-3"
                type="submit"
                form="form1"
                onClick={onPayClick}
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