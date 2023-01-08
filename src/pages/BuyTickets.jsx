import { SelectTickets } from "../components/SelectTickets"
import { SelectSeats } from '../components/SelectSeats'
import { useSelector } from "react-redux"

export const BuyTickets = () => {

    const nTickets = useSelector(state => state.movies.lastBuy.nTickets)
    return (
        <>
            {
                (!nTickets) ? <SelectTickets /> : <SelectSeats />
            }


        </>
    )
}
