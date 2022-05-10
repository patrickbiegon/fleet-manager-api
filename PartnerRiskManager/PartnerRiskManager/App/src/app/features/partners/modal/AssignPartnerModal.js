import { useEffect, useRef, useState } from "react";
import agent from "../../../api/agent";
import ModalUser from "./ModalUser";
import EmptyIlustration from "../../../../assets/media/illustrations/sigma-1/1.png"
import { toast } from "react-toastify";
import ClipLoaderComponent from "../../../layout/appComponents/loading/ClipLoaderComponent";

const AssignPartnerModal = ({ carId, closeModal, setUserToPartner }) => {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState("");

    function escFunction(event) {
        if (event.keyCode === 27) {
            closeModal();
        }
    }

    const isInitialMount = useRef(true);

    useEffect(() => {
        let waitBeforeSearch;
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            waitBeforeSearch = setTimeout(() => {
                searchUsers(inputValue)
            }, 1000)
        }

        return () => clearTimeout(waitBeforeSearch);
    }, [inputValue]);

    const searchUsers = name => {
        if (name.trim() === "") {
            setUsers(null)
            return;
        }

        setIsLoading(true);
        agent.Users.SearchUsersWithNoPartner(name)
            .then(users => setUsers(users))
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => document.removeEventListener("keydown", escFunction, false);
    }, []);


    const handleUserClick = user => {
        agent.partners.AssignUser({ carId, userId: user.id })
            .then(() => {
                setUserToPartner(user);
                toast.success(`Partner assigned to ${user.firstName} ${user.lastName}`)
                closeModal();
            })
            .catch(e => console.log(e))
    };

    const handleInputChange = event => setInputValue(event.target.value);

    return (
        <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(24,28,50, 0.15)" }}
            id="kt_modal_users_search"
            tabIndex={-1}
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered mw-650px">
                <div className="modal-content">
                    <div className="modal-header pb-0 border-0 justify-content-end">
                        <div
                            className="btn btn-sm btn-icon btn-active-color-primary"
                            data-bs-dismiss="modal"
                            onClick={closeModal}
                        >
                            <span className="svg-icon svg-icon-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <rect
                                        opacity="0.5"
                                        x={6}
                                        y="17.3137"
                                        width={16}
                                        height={2}
                                        rx={1}
                                        transform="rotate(-45 6 17.3137)"
                                        fill="black"
                                    />
                                    <rect
                                        x="7.41422"
                                        y={6}
                                        width={16}
                                        height={2}
                                        rx={1}
                                        transform="rotate(45 7.41422 6)"
                                        fill="black"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                        <div className="text-center mb-13">
                            <h1 className="mb-3">Search Users</h1>
                            <div className="text-muted fw-bold fs-5">
                                Select an user to assign the car
                            </div>
                        </div>
                        <div
                            id="kt_modal_users_search_handler"
                            data-kt-search-keypress="true"
                            data-kt-search-min-length={2}
                            data-kt-search-enter="enter"
                            data-kt-search-layout="inline"
                        >
                            <form
                                data-kt-search-element="form"
                                className="w-100 position-relative mb-5"
                                autoComplete="off"
                            >
                                <input type="hidden" />
                                <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <rect
                                            opacity="0.5"
                                            x="17.0365"
                                            y="15.1223"
                                            width="8.15546"
                                            height={2}
                                            rx={1}
                                            transform="rotate(45 17.0365 15.1223)"
                                            fill="black"
                                        />
                                        <path
                                            d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                            fill="black"
                                        />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    className="form-control form-control-lg form-control-solid px-15"
                                    name="search"
                                    placeholder="Search by name or email..."
                                    data-kt-search-element="input"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                                <span
                                    className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                                    data-kt-search-element="spinner"
                                >
                                    <span className="spinner-border h-15px w-15px align-middle text-muted" />
                                </span>
                                <span
                                    className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none"
                                    data-kt-search-element="clear"
                                >
                                    <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <rect
                                                opacity="0.5"
                                                x={6}
                                                y="17.3137"
                                                width={16}
                                                height={2}
                                                rx={1}
                                                transform="rotate(-45 6 17.3137)"
                                                fill="black"
                                            />
                                            <rect
                                                x="7.41422"
                                                y={6}
                                                width={16}
                                                height={2}
                                                rx={1}
                                                transform="rotate(45 7.41422 6)"
                                                fill="black"
                                            />
                                        </svg>
                                    </span>
                                </span>
                            </form>
                            <div className="py-5">
                                <div data-kt-search-element="suggestions mb-5">
                                    <div className="mh-375px scroll-y me-n7 pe-7">
                                        {isLoading && <ClipLoaderComponent className="text-center my-20" />}
                                        {!isLoading && users && users.map(user =>
                                            <ModalUser
                                                key={user.id}
                                                user={user}
                                                onUserClick={() => handleUserClick(user)}
                                            />
                                        )}
                                    </div>
                                </div>
                                {!isLoading && users && (users.length === 0) &&
                                    <div data-kt-search-element="empty" className="text-center d-block">
                                        <div className="fw-bold py-10">
                                            <div className="text-gray-600 fs-3 mb-2">No users found</div>
                                            <div className="text-muted fs-6">
                                                Try to search by username, full name or email...
                                            </div>
                                        </div>
                                        <div className="text-center px-5">
                                            <img
                                                src={EmptyIlustration}
                                                alt="not found ilustration"
                                                className="w-100 h-200px h-sm-325px"
                                            />
                                        </div>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssignPartnerModal;