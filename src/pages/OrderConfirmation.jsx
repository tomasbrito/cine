import { useNavigate } from "react-router-dom"

export const OrderConfirmation = () => {
    const navigate = useNavigate()

    const onHomeClick = () => {
        navigate('/')
    }

    return (
        <>
            <div className="container text-center  my-5">
                <div className="row tarjeta align-items-center">
                    <div className="col-12">

                        <i class="bi bi-check-circle icon-check h1"></i>
                        <div className="text-dark py-3 h1">Thank you for your order!</div>
                        <div className="text-dark my-2">You should receive an order confirmation email shortly</div>
                        <button className="btn btn-outline-secondary mt-5" onClick={onHomeClick}>
                            Home
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
