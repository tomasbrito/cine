
export const SeatInfo = ({ seat }) => {
    return (
        <>
                <div className="col-2 ">
                    <h6 className='border border-dark p-2' key={seat}>{seat}</h6>
                </div>
                <div className="col-7">
                    Entrada general
                </div>
                <div className="col-2">
                    $2000

            </div>

        </>
    )
}
