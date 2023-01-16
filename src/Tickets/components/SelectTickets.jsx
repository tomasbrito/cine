import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { setTicketsSlice } from '../../store/Tickets/ticketsSlice'
import { SeatInfo } from '../../components/SeatInfo'
import { Seats } from './Seats'


export const SelectTickets = () => {

    const [nTickets, setNTickets] = useState(1)
    const [counter, setcounter] = useState(0)
    const [seats, setSeats] = useState([])
    const dispatch = useDispatch()
    const lastBuy = useSelector(state => state.movies.lastBuy)
    const navigate = useNavigate()
    const { title } = useParams()


    const onTicketsChange = (event) => {
        setSeats([])
        setNTickets(event.target.value)
    }


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
        console.log(seats.length)
        console.log(nTickets + ' nTickets')
        navigate(`/tickets/${title}/pay`)
        //dispatch(setTicketsSlice({ seats, nTickets }))
    }

    return (
        <>

            <div className=" container-fluid  ">
                <div className="row  probar align-items-center justify-content-center">
                    <div className="col-12 col-lg-4 align-self-start ">
                        <div className="comprar mt-3">
                            <div className="mb-3 form-group">
                                    <div className="col-12 col-md-12 ">
                                        <h2>Seats</h2>
                                        {/* form tickets */}
                                        <div className="col-2">
                                            <label form="exampleFormControlSelect1">Tickets</label>
                                            <select className="form-select" onChange={onTicketsChange} id="exampleFormControlSelect1">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                            </select>
                                        </div>
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

                    <div className=" col-12 col-md-7 my-3  overflow-auto">
                        <Seats />
                    </div>


                </div>

                {/* //boton next */}
                <div className="row justify-content-end  bg-dark">
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
