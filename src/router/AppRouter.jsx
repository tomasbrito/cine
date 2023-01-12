import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { MovieDetail, Movies, NotFounded, Topbar } from "../components"
import { Footer } from "../components/Footer"

import { Loader } from "../components/Loader"
import { BuyTickets } from "../Tickets/pages/BuyTickets"
import { TicketsRouter } from "../Tickets/router/TicketsRouter"


export const AppRouter = () => {

    const { isLoadingMovies } = useSelector((state) => state.movies)

    return (
        <>

            {(isLoadingMovies) ? <Loader /> : <>


                <Routes>
                    <Route path="/Movies" element={<Movies />} />
                    <Route path="/MovieDetail/:title" element={<MovieDetail />} />
                    <Route path="/tickets/*" element={<TicketsRouter/>} />

                    <Route path="/" element={<Navigate to={'/Movies'} />} />
                    <Route path="/*" element={<NotFounded />} />
                </Routes>
                <hr />
                <Footer/>

            </>}



        </>
    )

}