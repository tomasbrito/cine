import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNTicketsToBuy } from '../store/Movies/moviesSlice'


export const SelectTickets = () => {

    const [nTickets, setNTickets] = useState(1)
    const dispatch = useDispatch()
    const lastBuy = useSelector(state => state.movies.lastBuy)

    const onTicketsChange = (event) => {
        setNTickets(event.target.value)
    }

    const onNextClick = () => {
        dispatch(setNTicketsToBuy(nTickets))
        
    }

    return (
        <>
            <div className="comprar mt-3">
                <div className="mb-3 form-group">
                    <label form="exampleFormControlSelect1">Tickets</label>
                    <div className="col-12 col-md-4">
                        <select width='40%' className="form-select" onChange={onTicketsChange} id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </select>
                    </div>

                </div>
                {(lastBuy.errorMessage) ? <ErrorWarning message={lastBuy.errorMessage} /> : <></>}

            </div>
            <button onClick={onNextClick} className='btn btn-primary'>Next</button>
        </>
    )
}
