import BlankUserImg from "../../../../assets/media/avatars/blank.png"

const ModalUser = (props) => {
    const { user, onUserClick } = props;

    return (
        <div
            className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
            style={{ cursor: "pointer" }}
            onClick={onUserClick}
        >
            <div className="symbol symbol-35px symbol-circle me-5">
                <img alt="Pic" src={user.imgSrc ? user.imgSrc : BlankUserImg} />
            </div>
            <div className="fw-bold">
                <span className="fs-6 text-gray-800 me-2">{user.firstName + " " + user.lastName} -</span>
                <span className="fs-6 text-gray-800 me-2">{user.email}</span>
                <span className="badge badge-light text-primary">{user.role ? user.role : "Admin"}</span>
            </div>
        </div>
    )
}

export default ModalUser;