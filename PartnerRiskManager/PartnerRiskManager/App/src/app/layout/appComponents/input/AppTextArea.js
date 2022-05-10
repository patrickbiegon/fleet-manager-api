const AppTextArea = ({ name, label, type, classes, placeholder, value, onChange }) => {
    return (
        <div className="fv-row mb-7">
            <label className="required fw-bold fs-6 mb-2">{label}</label>
            <textarea
                name={name}
                className={`form-control form-control-solid mb-3 mb-lg-0 ${classes ? classes : ""}`}
                // placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows="4"
                cols="50"
            />
        </div>
    )
}

export default AppTextArea;