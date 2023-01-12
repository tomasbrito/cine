
export const Seats = () => {

    const onSeatClick = (event) => {
        const seat = event.target
        seat.classList.add('bg-primary')
    }

    return (

        <div className="container text-center ">
            <div className="row mt-4">
                <div className="col-12">
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>

                </div>

            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                    <div onClick={onSeatClick} className="d-inline border py-2 px-3 m-1 seat"></div>
                </div>
            </div>
        </div>
    )
}
