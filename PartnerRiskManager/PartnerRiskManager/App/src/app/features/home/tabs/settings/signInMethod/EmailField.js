const EmailField = ({email, setIsEditingEmail}) => {
    return (
        <>
            <div id="kt_signin_email">
                <div className="fs-6 fw-bolder mb-1">Email Address</div>
                <div className="fw-bold text-gray-600">{email}</div>
            </div>
            <div id="kt_signin_email_button" className="ms-auto">
                <button className="btn btn-light btn-active-light-primary" onClick={() => setIsEditingEmail(true)}>Change Email</button>
            </div>
        </>
    )
}

export default EmailField;