import { Fragment } from "react"
import { useSelector } from "react-redux"

export const SeatInfo = ({ seat }) => {

    const { seatsSelectedSlice } = useSelector(state => state.tickets)
    console.log('render seatinfo')
    return (
        <>
            {
                seatsSelectedSlice.map((s) => (<Fragment key={s}>
                    <div className="row m-1 align-items-center">
                        <div className="col-2">
                            <h6 className='border border-dark p-2' key={s}>{s}</h6>
                        </div>
                        <div className="col-7">
                            Entrada general
                        </div>
                        <div className="col-2">
                            $1000

                        </div>
                    </div>
                </Fragment>))
            }


        </>
    )
}
