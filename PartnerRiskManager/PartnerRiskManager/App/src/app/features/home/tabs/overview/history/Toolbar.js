const Toolbar = () => {
    return (
        <>
            <div className="card-toolbar">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bolder px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_6_tab_1">Month</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_6_tab_2">Week</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4" data-bs-toggle="tab" href="#kt_table_widget_6_tab_3">Day</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Toolbar;