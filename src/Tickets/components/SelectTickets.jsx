import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { setTicketsSlice } from '../../store/Tickets/ticketsSlice'
import { SeatInfo } from '../../components/SeatInfo'
import { Seats } from './Seats'
import { useEffect } from 'react'
import { startGetSelected } from '../../store/Tickets/thunks'


export const SelectTickets = () => {

    const [nTickets, setNTickets] = useState(1)
    const [counter, setcounter] = useState(0)
    const [seats, setSeats] = useState([])
    const dispatch = useDispatch()
    const lastBuy = useSelector(state => state.movies.lastBuy)
    const navigate = useNavigate()
    const { title } = useParams()


    // deprecated
    const onTicketsChange = (event) => {
        setSeats([])
        setNTickets(event.target.value)
    }


    //DEPRECATED
    //pasar a hook
    //seleccionar asientos en la tabla

    const selectSeat = (event) => {
        const asiento = event.target


        if (!asiento.classList.contains('bg-primary')) {
            if ((counter >= nTickets)) return;
            asiento.classList.add('bg-primary')
            setcounter(counter + 1)
            seats.push(asiento.getAttribute('name'))
            const newSeats = [...seats]
            setSeats(newSeats)
        } else {
            asiento.classList.remove('bg-primary')
            setcounter(counter - 1)
            //const i = seats.findIndex(s => s === asiento.getAttribute('name'))
            const newSeats = seats.filter(s => s !== asiento.getAttribute('name'))
            setSeats(newSeats)
        }
    }

    const onNextClick = () => {
        navigate(`/tickets/${title}/pay`)
        //dispatch(setTicketsSlice({ seats, nTickets }))
    }

    const onBackClick = () => {
        navigate(-1)
    }

    useEffect(() => {

    }, [])

    return (
        <>

            <div className=" container-fluid  ">
                <div className="row align-items-center text-dark justify-content-center">
                    <div className="col-12 col-lg-4 align-self-start ">
                        <div className="comprar mt-3">
                            <div className="mb-3 form-group">
                                <div className="col-12 col-md-12 ">
                                    <h2>Seats</h2>
                                    {/* form tickets */}

                                    <hr />
                                    <div className='row pb-1 border border-dark justify-content-between text-center align-items-center '>
                                        <h2 className='text-start'>Selected</h2>
                                        <SeatInfo />
                                    </div>
                                </div>

                            </div>
                            {/* {(lastBuy.errorMessage) ? <ErrorWarning message={lastBuy.errorMessage} /> : <></>} */}

                        </div>
                    </div>

                    <div className=" col-12 col-md-7 my-3 p-3 overflow-auto">
                        <Seats />
                    </div>


                </div>

                {/* //boton next y back TODO OK */}
                <div className="row justify-content-between m-3 bg-light">
                    <div className="col-12 col-md-1 d-grid mb-1 mb-sm-0">
                        <button
                            onClick={onBackClick}
                            className="btn btn-outline-dark d-block">
                            Back
                        </button>

                    </div>
                    <div className="col-12 col-md-1 d-grid">
                        <button
                            onClick={onNextClick}
                            disabled={false} /* {(seats.length < nTickets)} */
                            className="btn  btn-primary d-block">
                            Next
                        </button>

                    </div>
                </div>

            </div>



        </>
    )
}
