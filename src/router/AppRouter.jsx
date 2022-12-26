import { Navigate, Route, Routes } from "react-router-dom"
import { MovieDetail, Movies,  NotFounded, Topbar } from "../components"


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/Movies" element={<Movies />} />
                <Route path="/MovieDetail" element={<MovieDetail />} />
                <Route path="/" element={<Navigate to={'/Movies'} />} />
                <Route path="/*" element={<NotFounded />} />
            </Routes>


        </>
    )
}
