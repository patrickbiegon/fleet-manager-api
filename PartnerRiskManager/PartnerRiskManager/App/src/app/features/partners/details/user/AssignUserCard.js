const AssignUserCard = ({ showModal }) => {
    return (
        <div className="flex-column flex-lg-row-auto w-lg-250px w-xl-300px mb-10 order-1 order-lg-2">
            <div className="card card-flush mb-0" data-kt-sticky="true" data-kt-sticky-name="subscription-summary" data-kt-sticky-offset="{default: false, lg: '200px'}" data-kt-sticky-width="{lg: '250px', xl: '300px'}" data-kt-sticky-left="auto" data-kt-sticky-top="150px" data-kt-sticky-animation="false" data-kt-sticky-zindex="95">
                <div className="card-header">
                    <div className="card-title">
                        <h2>No User Yet!</h2>
                    </div>
                </div>
                <div className="card-body pt-0 fs-6">
                    <div className="mb-0">
                        <div className="btn btn-primary" onClick={() => showModal()}>Assign User</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssignUserCard;