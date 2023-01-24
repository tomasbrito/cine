import { useNavigate } from "react-router-dom"

export const OrderConfirmation = () => {
    const navigate = useNavigate()

    const onHomeClick = () => {
        navigate('/')
    }

    return (
        <>
            <div className="text-dark py-5 mx-4 h1">OrderConfirmation</div>
            <button className="btn btn-primary" onClick={onHomeClick}>
                Home
            </button>
        </>
    )
}
