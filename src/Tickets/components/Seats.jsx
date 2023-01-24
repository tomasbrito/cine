import { configureStore } from "@reduxjs/toolkit"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startGetUnavailableSeats } from "../../store/Tickets/thunks"
import { setSeatsSelectedSlice } from "../../store/Tickets/ticketsSlice"

export const Seats = () => {

    const seatsSelectedSlice = useSelector(state => state.tickets)
    const dispatch = useDispatch()
    const { unavailableSeats } = useSelector(state => state.tickets)
    const [counter, setCounter] = useState(0)
    const [seats, setSeats] = useState([])


    useEffect(() => {
        dispatch(setSeatsSelectedSlice(seats))
    }, [seats])

    useEffect(() => {
        dispatch(startGetUnavailableSeats())
    }, [])


    useEffect(() => {
        setUnavailableSeats()
        console.log('unaaa efect ' + unavailableSeats)
    }, [unavailableSeats])

    //marcar asientos ocupados
    const setUnavailableSeats = () => {
        if (unavailableSeats) {
            clearSeats()
            unavailableSeats.forEach(element => {
                const seat = document.getElementsByName(element)
                seat[0].classList.add('selected')
            });
        }
    }

    //para desmarcar los asientos ocupados
    const clearSeats = () => {
        if (unavailableSeats) {
            console.log('limpiando los viejos ' + unavailableSeats)
            const allSeats = document.querySelectorAll('.selected')
            console.log(allSeats)
            allSeats.forEach(element => {
                element.classList.remove('selected')
            })

        }
    }


    //marca o desmarca los asientos y los guarda en el state
    const onSeatClick = (event) => {
        const asiento = event.target

        if (asiento.classList.contains('selected')) return
        if (unavailableSeats.includes(asiento.getAttribute('name'))) return

        if (!asiento.classList.contains('bg-primary')) {
            if ((counter >= 6)) return;
            asiento.classList.add('bg-primary')
            setCounter(counter + 1)
            const newSeats = [...seats, asiento.getAttribute('name')]
            setSeats(newSeats)

        } else {
            asiento.classList.remove('bg-primary')
            setCounter(counter - 1)
            //const i = seats.findIndex(s => s === asiento.getAttribute('name'))
            const newSeats = seats.filter(s => s !== asiento.getAttribute('name'))
            //setSeats(seats.filter(s => s !== asiento.getAttribute('name')))
            setSeats([...newSeats])
            dispatch(setSeatsSelectedSlice(seats))
        }
    }

    return (

        <div className="container text-center ">
            <div className="row mt-4">
                <div className="col-12">
                    <div onClick={onSeatClick} name='A1' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='A2' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='A3' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='A4' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='A5' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='A6' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='A7' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='A8' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='A9' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='A10' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='A11' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='A12' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='A13' className="d-inline border py-2 px-3 m-1 seat"></div>

                </div>

            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div onClick={onSeatClick} name='B1' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='B2' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='B3' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='B4' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='B5' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='B6' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='B7' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='B8' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='B9' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='B10' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='B11' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='B12' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='B13' className="d-inline border py-2 px-3 m-1 seat"></div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div onClick={onSeatClick} name='C1' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='C2' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='C3' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='C4' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='C5' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='C6' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='C7' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='C8' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='C9' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='C10' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='C11' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='C12' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='C13' className="d-inline border py-2 px-3 m-1 seat"></div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div onClick={onSeatClick} name='D1' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='D2' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='D3' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='D4' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='D5' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='D6' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='D7' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='D8' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='D9' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='D10' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='D11' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='D12' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='D13' className="d-inline border py-2 px-3 m-1 seat"></div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div onClick={onSeatClick} name='E1' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='E2' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='E3' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='E4' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='E5' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='E6' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='E7' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='E8' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='E9' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='E10' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='E11' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='E12' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='E13' className="d-inline border py-2 px-3 m-1 seat"></div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div onClick={onSeatClick} name='F1' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='F2' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='F3' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='F4' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='F5' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='F6' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='F7' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='F8' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='F9' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='F10' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='F11' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='F12' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='F13' className="d-inline border py-2 px-3 m-1 seat"></div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div onClick={onSeatClick} name='G1' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='G2' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='G3' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='G4' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='G5' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='G6' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='G7' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='G8' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='G9' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='G10' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='G11' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='G12' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='G13' className="d-inline border py-2 px-3 m-1 seat"></div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div onClick={onSeatClick} name='H1' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='H2' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='H3' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='H4' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='H5' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='H6' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='H7' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='H8' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='H9' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='H10' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='H11' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='H12' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='H13' className="d-inline border py-2 px-3 m-1 seat"></div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div onClick={onSeatClick} name='I1' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='I2' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='I3' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='I4' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='I5' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='I6' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='I7' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='I8' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='I9' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='I10' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='I11' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='I12' className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} name='I13' className="d-inline border py-2 px-3 m-1 seat"></div>
                </div>
            </div>
        </div>
    )
}
