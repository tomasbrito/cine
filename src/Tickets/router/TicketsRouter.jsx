import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { Loader } from "../../components/Loader"
import { OrderConfirmation } from "../../pages/OrderConfirmation"
import { PayTickets } from "../components/PayTickets"
import { SelectTickets } from "../components/SelectTickets"
import { BuyTickets } from "../pages/BuyTickets"

export const TicketsRouter = () => {

    return (
        <>


            <Routes>
                <Route path="/:title/tickets" element={<SelectTickets />} />
                <Route path="/:title/pay" element={<PayTickets />} />
                <Route path="/confirmation" element={<OrderConfirmation />} />
            </Routes>

        </>
    )
}
