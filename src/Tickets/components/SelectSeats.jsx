import { collectionGroup } from "firebase/firestore/lite"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { setTicketsSlice } from "../../store/Tickets/ticketsSlice"


//discontinuada (unificada en select Tickets)
export const SelectSeats = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const { title } = useParams()
    const [counter, setcounter] = useState(0)
    const limit = useSelector(state => state.tickets.nTickets)
    const [seats, setseats] = useState([])

    //pasar a hook
    const selectSeat = (event) => {
        const asiento = event.target


        if (!asiento.classList.contains('bg-primary')) {
            if ((counter >= limit)) return;
            asiento.classList.add('bg-primary')
            setcounter(counter + 1)
            seats.push(asiento.getAttribute('name'))
        } else {
            asiento.classList.remove('bg-primary')
            setcounter(counter - 1)
            const i = seats.findIndex(s => s === asiento.getAttribute('name'))
            seats.splice(i, 1)
        }

    }

    const onNextClick = () => {
        console.log(seats.length)
        console.log(limit + ' limit')
        navigate(`/tickets/${title}/pay`)
        dispatch(setTicketsSlice(seats))
    }


    return (
        <>
            <button
                onClick={onNextClick}
                disabled={(seats.length < limit)}
                className="btn btn-primary">
                Next
            </button>

            <div className="container d-flex justify-content-center align-items-center alto">
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
        </>
    )
}
