import { useState } from "react";
import LoadingButton from "../../../../../layout/appComponents/LoadingButton"
import { toast } from "react-toastify";
import agent from "../../../../../api/agent";

const EditEmailForm = ({user, closeForm}) => {
    const [formValues, setFormValues] = useState({
        userId: user.id,
        newEmail: "",
        password: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false);
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

    const handleSubmit = event => {
        event.preventDefault();
        setIsSubmitting(true);
        if (formValues.newEmail === "" || formValues.password === "") {
            setFormErrorMsg("Please fill in all fields");
            setIsSubmitting(false);
            return;
        }
        agent.Account.requestEmailChange(formValues)
            .then(() => toast.success("A confirmation email was sent to new email"))
            .catch(() => toast.error("Something went wrong"))
            .finally(() => closeForm());
    }

    return (
        <div id="kt_signin_email_edit" className="flex-row-fluid">
            {/*begin::Form*/}
            <form className="form" autoComplete="off" onSubmit={handleSubmit}>
                <div className="row mb-6">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="fv-row mb-0">
                    <label
                        htmlFor="newEmail"
                        className="form-label fs-6 fw-bolder mb-3"
                    >
                        Enter New Email Address
                    </label>
                    <input
                        type="email"
                        className="form-control form-control-lg form-control-solid"
                        id="newEmail"
                        placeholder="Email Address"
                        name="newEmail"
                        value={formValues.newEmail}
                        onChange={handleFormChange}
                        autoComplete="new-email"
                    />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="fv-row mb-0">
                    <label
                        htmlFor="confirmemailpassword"
                        className="form-label fs-6 fw-bolder mb-3"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control form-control-lg form-control-solid"
                        name="password"
                        id="confirmemailpassword"
                        value={formValues.password}
                        autoComplete="new-password"
                        onChange={handleFormChange}
                    />
                    </div>
                </div>
                <div className="form-text mb-5 text-danger">{formErrorMsg}</div>
                </div>
                <div className="d-flex">
                <LoadingButton classes="me-2 px-6" isSubmitting={isSubmitting}>Update Email</LoadingButton>
                <button
                    id="kt_signin_cancel"
                    type="button"
                    className="btn btn-color-gray-400 btn-active-light-primary px-6"
                    onClick={closeForm}
                >
                    Cancel
                </button>
                </div>
            </form>
            {/*end::Form*/}
            </div>

    )
}

export default EditEmailForm;