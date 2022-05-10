const UserListFilter = () => {
    return (
        <>
            <button type="button" className="btn btn-primary me-3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                <span className="svg-icon svg-icon-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="black" />
                    </svg>
                </span>
                Filter</button>
            <div className="menu menu-sub menu-sub-dropdown w-300px w-md-325px" data-kt-menu="true">
                <div className="px-7 py-5">
                    <div className="fs-5 text-dark fw-bolder">Filter Options</div>
                </div>
                <div className="separator border-gray-200" />
                <div className="px-7 py-5" data-kt-user-table-filter="form">
                    <div className="mb-10">
                        <label className="form-label fs-6 fw-bold">Role:</label>
                        <select className="form-select form-select-solid fw-bolder" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-kt-user-table-filter="role" data-hide-search="true">
                            <option />
                            <option value="Administrator">Administrator</option>
                            <option value="Analyst">Analyst</option>
                            <option value="Developer">Developer</option>
                            <option value="Support">Support</option>
                            <option value="Trial">Trial</option>
                        </select>
                    </div>
                    <div className="mb-10">
                        <label className="form-label fs-6 fw-bold">Two Step Verification:</label>
                        <select className="form-select form-select-solid fw-bolder" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-kt-user-table-filter="two-step" data-hide-search="true">
                            <option />
                            <option value="Enabled">Enabled</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="reset" className="btn btn-light btn-active-light-primary fw-bold me-2 px-6" data-kt-menu-dismiss="true" data-kt-user-table-filter="reset">Reset</button>
                        <button type="submit" className="btn btn-primary fw-bold px-6" data-kt-menu-dismiss="true" data-kt-user-table-filter="filter">Apply</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserListFilter;