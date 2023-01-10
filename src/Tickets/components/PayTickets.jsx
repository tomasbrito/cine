import { useSelector } from "react-redux"

export const PayTickets = () => {

    const seats = useSelector(state => state.tickets.seats)

  return (
    <>
    asd
        {
            seats.map(s => (
                <h1 key={s}>{s}</h1>
            ))
        }
    </>
  )
}
