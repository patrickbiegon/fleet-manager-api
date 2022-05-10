
const AppSwitch = ({ name, label, classes, placeholder, value, onChange }) => {
    // console.log(value);
    return (
        <div className="d-flex flex-stack mb-8">
            <div className="me-5">
                <label className="fs-6 fw-bold">{label}</label>
                <div className="fs-7 fw-bold text-muted">If you need more info, ask the person in question</div>
            </div>
            <label className="form-check form-switch form-check-custom form-check-solid">
                <input
                    name={name}
                    className={`form-check-input ${classes}`}
                    type="checkbox"
                    // defaultValue={1}
                    // defaultChecked="checked"
                    checked={value === true}
                    value={value}
                    onChange={onChange}
                />
                {/* <span className="form-check-label fw-bold text-muted">Allowed</span> */}
            </label>
        </div>

    )
}

export default AppSwitch;