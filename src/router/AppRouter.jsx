import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { MovieDetail, Movies, NotFounded, Topbar } from "../components"
import { BuyTickets } from "../components/BuyTickets"
import { Loader } from "../components/Loader"


export const AppRouter = () => {

    const { isLoadingMovies } = useSelector((state) => state.movies)

    return (
        <>

            {(isLoadingMovies) ? <Loader /> : <>


                <Routes>
                    <Route path="/Movies" element={<Movies />} />
                    <Route path="/MovieDetail/:title" element={<MovieDetail />} />
                    <Route path="/Tickets/:title" element={<BuyTickets />} />
                    <Route path="/" element={<Navigate to={'/Movies'} />} />
                    <Route path="/*" element={<NotFounded />} />
                </Routes>


            </>}



        </>
    )

}