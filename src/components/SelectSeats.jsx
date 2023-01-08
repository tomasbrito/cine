import { useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export const SelectSeats = () => {

    const { title } = useParams()
    const [counter, setcounter] = useState(0)
    const limite = useSelector(state => state.movies.lastBuy.tickets)

    const selectSeat = (event) => {
        const asiento = event.target

        
        
        if (!asiento.classList.contains('bg-primary')) {
            if ((counter >= limite) ) return;
            asiento.classList.add('bg-primary')
            setcounter(counter + 1)
        } else {
            asiento.classList.remove('bg-primary')
            setcounter(counter - 1)
        }

    }

    return (
        <>
            buy
            <div className="container d-flex justify-content-center align-items-center alto">
                <div className="row ">
                    <div className="col-12">
                        <table className="table ">
                            <tbody>
                                <tr>
                                    <td onClick={selectSeat} name='asiento1' className="border m-5"></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>

                                </tr>
                                <tr>
                                    <td onClick={selectSeat} className="border m-5"></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>

                                </tr>
                                <tr>
                                    <td onClick={selectSeat} className="border m-5"></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>

                                </tr>
                                <tr>
                                    <td onClick={selectSeat} className="border m-5"></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>

                                </tr>
                                <tr>
                                    <td onClick={selectSeat} className="border m-5"></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>

                                </tr>
                                <tr>
                                    <td onClick={selectSeat} className="border m-5"></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>
                                    <td onClick={selectSeat}></td>

                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
