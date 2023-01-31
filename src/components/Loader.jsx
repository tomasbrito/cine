import { useEffect } from "react"
import { useSelector } from "react-redux"

export const Loader = () => {
    const isLoading = useSelector(state => state.movies.isLoadingMovies)


    const showLoading = () => {
        console.log(isLoading)
    }

    return (
        <>
            <div className="container-fluid text-center loader">
                <div className="row vh-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="spinner-border" role="status">
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
