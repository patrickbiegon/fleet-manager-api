const PasswordField = ({setIsEditingPassword}) => {
    return (
        <>
            <div id="kt_signin_password">
                <div className="fs-6 fw-bolder mb-1">Password</div>
                <div className="fw-bold text-gray-600">************</div>
            </div>
            <div id="kt_signin_password_button" className="ms-auto">
                <button className="btn btn-light btn-active-light-primary" onClick={() => setIsEditingPassword(true)}>Reset Password</button>
            </div>
        </>
    )
}

export default PasswordField