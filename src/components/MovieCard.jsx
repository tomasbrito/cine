
export const MovieCard = ({ title, imgURL }) => {
    return (
        <>
            <div className="">
                <div className="card" >
                    <img className="card-img-top" src={imgURL} alt="Card image cap" />
                    <div className="card-body">
                        <p class="carousel-caption">{title} </p>
                    </div>
                </div>
            </div>
        </>
    )
}
