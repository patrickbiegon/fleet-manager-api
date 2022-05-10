const Toolbar = () => {
    return (
        <div className="card-toolbar">
            <button type="button" className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                <span className="svg-icon svg-icon-3 svg-icon-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <rect x={5} y={5} width={5} height={5} rx={1} fill="#000000" />
                            <rect x={14} y={5} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                            <rect x={5} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                            <rect x={14} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                        </g>
                    </svg>
                </span>
            </button>
            {/* <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                <div className="menu-item px-3">
                    <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">Quick Actions</div>
                </div>
                <div className="separator mb-3 opacity-75" />
                <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">New Ticket</a>
                </div>
                <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">New Customer</a>
                </div>
                <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                    <a href="#" className="menu-link px-3">
                        <span className="menu-title">New Group</span>
                        <span className="menu-arrow" />
                    </a>
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                        <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">Admin Group</a>
                        </div>
                        <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">Staff Group</a>
                        </div>
                        <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">Member Group</a>
                        </div>
                    </div>
                </div>
                <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">New Contact</a>
                </div>
                <div className="separator mt-3 opacity-75" />
                <div className="menu-item px-3">
                    <div className="menu-content px-3 py-3">
                        <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Toolbar;