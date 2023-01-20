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
            <div className="animate__animated animate__fadeIn mb-2">
                <div className="card" onClick={onMovieClick} >
                    <img className="card-img-top img-fluid" src={imgURL} alt="Card image cap" />
                    <div className="position-absolute title-card bottom-0 text-light w-100">
                        <p className="py-2 m-0 text-center">{title}</p>
                    </div>

                </div>
            </div>
        </>
    )
}
