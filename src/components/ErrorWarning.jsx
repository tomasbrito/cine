export const ErrorWarning = ({ message }) => {
    return (
        <>
            <div className="alert alert-danger" role="alert">
                {message}
            </div>
        </>
    )
}