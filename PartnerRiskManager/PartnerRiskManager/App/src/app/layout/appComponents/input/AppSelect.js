const AppSelect = ({ options, name, label, placeholder, value, onChange, labelClasses, inputClasses }) => {
    return (
        <>
            {/* <label className="required fw-bold fs-6 mb-2">{label}</label>
            <select
                name={name}
                className={`form-control form-control-solid mb-3 mb-lg-0 ${classes ? classes : ""}`}
                // placeholder={placeholder}
                value={value}
                onChange={onChange}
            >
                {options.map((option, i) => (
                    <option key={i} value={i}>{option}</option>
                ))}

            </select> */}

            <label className={labelClasses ? labelClasses : "d-flex align-items-center fs-6 fw-bold mb-2"}>{label}</label>
            <select
                name={name}
                className={inputClasses ? inputClasses : "form-select form-select-solid select2"}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            >
                {options.map((option, i) => (
                    <option key={i} value={i}>{option}</option>
                ))}
            </select>

            {/* <span className="select2 select2-container select2-container--bootstrap5 select2-container--below select2-container--focus select2-container--open" dir="ltr" data-select2-id="select2-data-11-k4wb" style={{ width: '100%' }}>
                <span className="selection">
                    <span className="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-target_assign-1g-container" aria-controls="select2-target_assign-1g-container">
                        <span className="select2-selection__rendered" id="select2-target_assign-1g-container" role="textbox" aria-readonly="true" title="Select a Team Member">
                            <span className="select2-selection__placeholder">Select a Team Member</span>
                        </span>
                        <span className="select2-selection__arrow" role="presentation">
                            <b role="presentation" />
                        </span>
                    </span>
                </span>
                <span className="dropdown-wrapper" aria-hidden="true" />
            </span> */}

            <div className="fv-plugins-message-container invalid-feedback"></div>
        </>
    )
}

export default AppSelect;