import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { MovieDetail, Movies, NotFounded, Topbar } from "../components"
import { Loader } from "../components/Loader"


export const AppRouter = () => {

    const { isLoadingMovies } = useSelector((state) => state.movies)

    console.log(isLoadingMovies)

    return (
        <>

            {(isLoadingMovies) ? <Loader /> : <>


                <Routes>
                    <Route path="/Movies" element={<Movies />} />
                    <Route path="/MovieDetail/:title" element={<MovieDetail />} />
                    <Route path="/" element={<Navigate to={'/Movies'} />} />
                    <Route path="/*" element={<NotFounded />} />
                </Routes>


            </>}



        </>
    )

}