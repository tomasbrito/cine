import { useSelector } from "react-redux"

export const PayTickets = () => {

    const seats = useSelector(state => state.tickets.seats)

  return (
    <>
    PAY 
        {
            seats.map(s => (
                <h1 key={s}>{s}</h1>
            ))
        }
    </>
  )
}
