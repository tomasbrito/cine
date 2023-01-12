import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { startGetMovieByTitle } from "../store/Movies/thunks"

export const MovieCard = ({ title, imgURL }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onMovieClick = () => {
        dispatch(startGetMovieByTitle({ title }))
        navigate(`/MovieDetail/${title}`)
    }

    return (
        <>
            <div className="animate__animated animate__fadeIn">
                <div className="card" onClick={onMovieClick} >
                    <img className="card-img-top" src={imgURL} alt="Card image cap" />
                    <div className="card-body text-center p-1">
                        <p className="text-dark  p-0 m-0">{title} </p>

                    </div>

                </div>
            </div>
        </>
    )
}
