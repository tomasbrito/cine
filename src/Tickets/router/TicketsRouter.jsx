import { Route, Routes } from "react-router-dom"
import { PayTickets } from "../components/PayTickets"
import { SelectSeats } from "../components/SelectSeats"
import { SelectTickets } from "../components/SelectTickets"
import { BuyTickets } from "../pages/BuyTickets"

export const TicketsRouter = () => {
    return (
        <>

            <Routes>
                <Route path="/:title/tickets" element={<SelectTickets />} />
                <Route path="/:title/seats" element={<SelectSeats />} />
                <Route path="/:title/pay" element={<PayTickets />} />
            </Routes>

        </>
    )
}
