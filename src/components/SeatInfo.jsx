import { Fragment } from "react"
import { useSelector } from "react-redux"

export const SeatInfo = ({ seat }) => {

    const { seats } = useSelector(state => state.tickets)

    return (
        <>
            {
                seats.map((s) => (<Fragment key={s}>
                    <div className="row m-1 align-items-center">
                        <div className="col-2">
                            <h6 className='border border-dark p-2' key={s}>{s}</h6>
                        </div>
                        <div className="col-7">
                            Entrada general
                        </div>
                        <div className="col-2">
                            $2000

                        </div>
                    </div>
                </Fragment>))
            }


        </>
    )
}
