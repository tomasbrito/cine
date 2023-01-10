import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { setTicketsSlice } from '../../store/Tickets/ticketsSlice'


export const SelectTickets = () => {

    const [nTickets, setNTickets] = useState(1)
    const [counter, setcounter] = useState(0)
    const [seats, setSeats] = useState([])
    const dispatch = useDispatch()
    const lastBuy = useSelector(state => state.movies.lastBuy)
    const navigate = useNavigate()
    const { title } = useParams()


    const onTicketsChange = (event) => {
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
            const i = seats.findIndex(s => s === asiento.getAttribute('name'))
            const newSeats = seats.splice(i, 1)
            setSeats(newSeats)
        }

    }

    const onNextClick = () => {
        console.log(seats.length)
        console.log(nTickets + ' nTickets')
        navigate(`/tickets/${title}/pay`)
        dispatch(setTicketsSlice({ seats, nTickets }))
    }

    return (
        <>

            <div className="container alto">
                <div className="row justify-content-center align-items-center alto bg-secondary">
                    <div className="col-12 col-md-5 align-self-start">
                        <div className="comprar mt-3">
                            <div className="mb-3 form-group">
                                <label form="exampleFormControlSelect1">Tickets</label>
                                <div className="col-12 col-md-6">
                                    <select className="form-select" onChange={onTicketsChange} id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </select>
                                </div>

                            </div>
                            {/* {(lastBuy.errorMessage) ? <ErrorWarning message={lastBuy.errorMessage} /> : <></>} */}

                        </div>
                    </div>


                    <div className="col-12 col-md-5 ">

                        <div className="container">
                            <div className="row ">
                                <div className="col-12">
                                    <table className="table ">
                                        <tbody>
                                            <tr>
                                                <td onClick={selectSeat} name='a1' className="border m-5"></td>
                                                <td onClick={selectSeat} name='a2'></td>
                                                <td onClick={selectSeat} name='a3'></td>
                                                <td onClick={selectSeat} name='a4'></td>
                                                <td onClick={selectSeat} name='a5'></td>
                                                <td onClick={selectSeat} name='a6'></td>
                                                <td onClick={selectSeat} name='a7'></td>
                                                <td onClick={selectSeat} name='a8'></td>
                                                <td onClick={selectSeat} name='a9'></td>
                                                <td onClick={selectSeat} name='a10'></td>



                                            </tr>
                                            <tr>
                                                <td onClick={selectSeat} name='b1' className="border m-5"></td>
                                                <td onClick={selectSeat} name='b2'></td>
                                                <td onClick={selectSeat} name='b3'></td>
                                                <td onClick={selectSeat} name='b4'></td>
                                                <td onClick={selectSeat} name='b5'></td>
                                                <td onClick={selectSeat} name='b6'></td>
                                                <td onClick={selectSeat} name='b7'></td>
                                                <td onClick={selectSeat} name='b8'></td>
                                                <td onClick={selectSeat} name='b9'></td>
                                                <td onClick={selectSeat} name='b10'></td>

                                            </tr>
                                            <tr>
                                                <td onClick={selectSeat} name='c1' className="border m-5"></td>
                                                <td onClick={selectSeat} name='c2'></td>
                                                <td onClick={selectSeat} name='c3'></td>
                                                <td onClick={selectSeat} name='c4'></td>
                                                <td onClick={selectSeat} name='c5'></td>
                                                <td onClick={selectSeat} name='c6'></td>
                                                <td onClick={selectSeat} name='c7'></td>
                                                <td onClick={selectSeat} name='c8'></td>
                                                <td onClick={selectSeat} name='c9'></td>
                                                <td onClick={selectSeat} name='c10'></td>

                                            </tr>
                                            <tr>
                                                <td onClick={selectSeat} name='d1' className="border m-5"></td>
                                                <td onClick={selectSeat} name='d2'></td>
                                                <td onClick={selectSeat} name='d3'></td>
                                                <td onClick={selectSeat} name='d4'></td>
                                                <td onClick={selectSeat} name='d5'></td>
                                                <td onClick={selectSeat} name='d6'></td>
                                                <td onClick={selectSeat} name='d7'></td>
                                                <td onClick={selectSeat} name='d8'></td>
                                                <td onClick={selectSeat} name='d9'></td>
                                                <td onClick={selectSeat} name='d10'></td>

                                            </tr>
                                            <tr>
                                                <td onClick={selectSeat} name='e1' className="border m-5"></td>
                                                <td onClick={selectSeat} name='e2'></td>
                                                <td onClick={selectSeat} name='e3'></td>
                                                <td onClick={selectSeat} name='e4'></td>
                                                <td onClick={selectSeat} name='e5'></td>
                                                <td onClick={selectSeat} name='e6'></td>
                                                <td onClick={selectSeat} name='e7'></td>
                                                <td onClick={selectSeat} name='e8'></td>
                                                <td onClick={selectSeat} name='e9'></td>
                                                <td onClick={selectSeat} name='e10'></td>

                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="row justify-content-end">
                    <div className="col-12 col-md-1 d-grid">
                        <button
                            onClick={onNextClick}
                            disabled={(seats.length < nTickets)}
                            className="btn  btn-primary d-block">
                            Next
                        </button>

                    </div>
                </div>

            </div>








        </>
    )
}
