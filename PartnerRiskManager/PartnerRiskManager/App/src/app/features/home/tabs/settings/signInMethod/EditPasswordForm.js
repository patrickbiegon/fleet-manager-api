import { useState } from "react";
import agent from "../../../../../api/agent";

const EditPasswordFrom = ({ closeForm }) => {
    const [formValues, setFormValues] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    })

    const [formErrorMsg, setFormErrorMsg] = useState("");

    const handleFormChange = event => {
        const { name, value } = event.target;
        setFormValues(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const newPasswordIsValid = () => {
        if (formValues.newPassword.length < 6) {
            setFormErrorMsg("Password must be at least 6 characters long");
            return false;
        }
        return true;
    }

    const areValidInputs = () => {
        if (formValues.currentPassword === "" || formValues.newPassword === "" || formValues.confirmPassword === "") {
            setFormErrorMsg("Please fill in all fields");
            return false;
        }
        if (!newPasswordIsValid()) return false;
        if (formValues.newPassword !== formValues.confirmPassword) {
            setFormErrorMsg("New password and confirm password fields do not match");
            return false;
        }
        return true;
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (areValidInputs()) {
            agent.Account.changeMyPassword(formValues)
                .then(() => closeForm())
                .catch(e => {
                    console.log(e)
                    setFormErrorMsg(e.data.errors.error[0])
                })
        }
    }

    return (
        <div id="kt_signin_password_edit" className="flex-row-fluid">
            <form id="kt_signin_change_password" className="form" onSubmit={handleSubmit}>
                <div className="row mb-1">
                    <div className="col-lg-4">
                        <div className="fv-row mb-0">
                            <label htmlFor="currentpassword" className="form-label fs-6 fw-bolder mb-3">Current Password</label>
                            <input type="password" className="form-control form-control-lg form-control-solid" name="currentPassword" id="currentpassword" onChange={handleFormChange} />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="fv-row mb-0">
                            <label htmlFor="newpassword" className="form-label fs-6 fw-bolder mb-3">New Password</label>
                            <input type="password" className="form-control form-control-lg form-control-solid" name="newPassword" id="newpassword" onChange={handleFormChange} />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="fv-row mb-0">
                            <label htmlFor="confirmpassword" className="form-label fs-6 fw-bolder mb-3">Confirm New Password</label>
                            <input type="password" className="form-control form-control-lg form-control-solid" name="confirmPassword" id="confirmpassword" onChange={handleFormChange} />
                        </div>
                    </div>
                </div>
                <div className="form-text mb-5 text-danger">{formErrorMsg}</div>
                <div className="d-flex">
                    <button id="kt_password_submit" type="submit" className="btn btn-primary me-2 px-6">Update Password</button>
                    <button id="kt_password_cancel" type="button" className="btn btn-color-gray-400 btn-active-light-primary px-6" onClick={closeForm}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditPasswordFrom;