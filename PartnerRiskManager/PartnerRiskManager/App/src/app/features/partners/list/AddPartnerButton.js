const AddPartnerButton = ({handleShowAddPartnerModal}) => {
    return (
        <button
            className="btn btn-primary er fs-6 px-8 py-4"
            onClick={handleShowAddPartnerModal}
        >
            <span className="svg-icon svg-icon-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <rect
                        opacity="0.5"
                        x="11.364"
                        y="20.364"
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(-90 11.364 20.364)"
                        fill="black"
                    />
                    <rect
                        x="4.36396"
                        y="11.364"
                        width={16}
                        height={2}
                        rx={1}
                        fill="black"
                    />
                </svg>
            </span>
            Add Partner
        </button>
    )
}

export default AddPartnerButton;