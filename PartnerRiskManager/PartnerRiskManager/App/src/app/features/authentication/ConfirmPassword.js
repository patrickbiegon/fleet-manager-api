import { useMemo } from "react";
import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import Logo from "../../../assets/media/logos/logo-1.svg";
import agent from "../../api/agent";
import LoadingButton from "../../layout/appComponents/LoadingButton"

function useQuery() {
    const { search } = useLocation();
  
    return useMemo(() => new URLSearchParams(search), [search]);
}

const ConfirmPassword = (props) => {
    let query = useQuery();
    const history = useHistory();

    const [formValues, setFormValues] = useState({
        password: "",
        confirmPassword: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleFormChange = event => {
        const {name, value} = event.target;
        setFormValues(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    };

    const formValuesAreValid = () => {
        if (formValues.password !== formValues.confirmPassword) {
            setErrorMsg("Password and Confirm Password fields do not match.");
            return false;
        }

        if (formValues.password.length < 6) {
            setErrorMsg("Password must have at leaset 6 characters.");
            return false;
        }

        return true;
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!formValuesAreValid()) return;

        setIsSubmitting(true);
        agent.Account.resetPassword({
            ...formValues,
            userId: query.get("uid"),
            token: query.get("token")
        })
            .then(() => {
                history.push("/login");
                toast.success("Password has been changed")
            })
            .catch(e => console.log(e))
            .finally(() => setIsSubmitting(false));
    }

    return (
        <div className="d-flex flex-column flex-root">
            {/*begin::Authentication - Password reset */}
            <div
                className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed mt-20"
                style={{ backgroundImage: `url(../../../assets/media/illustrations/sigma-1/14.png)` }}
            >
                {/*begin::Content*/}
                <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
                {/*begin::Logo*/}
                <div className="mb-12">
                    <img
                    alt="Logo"
                    src={Logo}
                    className="h-40px"
                    />
                </div>
                {/*end::Logo*/}
                {/*begin::Wrapper*/}
                <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
                    {/*begin::Form*/}
                    <form
                    className="form w-100"
                    id="kt_password_reset_form"
                    onSubmit={handleSubmit}
                    >
                    {/*begin::Heading*/}
                    <div className="text-center mb-10">
                        {/*begin::Title*/}
                        <h1 className="text-dark mb-3">Reset your password</h1>
                        {/*end::Title*/}
                        {/*begin::Link*/}
                        <div className="text-gray-400 fw-bold fs-4">
                        Enter new password
                        </div>
                        {/*end::Link*/}
                    </div>
                    {/*begin::Heading*/}
                    {/*begin::Input group*/}
                    <div className="fv-row mb-10">
                        <label className="form-label fw-bolder text-gray-900 fs-6">
                        Password
                        </label>
                        <input
                        className="form-control form-control-solid"
                        type="password"
                        placeholder
                        name="password"
                        value={formValues.password}
                        onChange={handleFormChange}
                        autoComplete="off"
                        />
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="fv-row mb-10">
                        <label className="form-label fw-bolder text-gray-900 fs-6">
                        Confirm Password
                        </label>
                        <input
                        className="form-control form-control-solid"
                        type="password"
                        placeholder
                        name="confirmPassword"
                        value={formValues.confirmPassword}
                        onChange={handleFormChange}
                        autoComplete="off"
                        />
                        <div className="form-text mb-5 text-danger">{errorMsg}</div>
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Actions*/}
                    <div className="d-flex flex-wrap justify-content-center pb-lg-0">
                        <LoadingButton isSubmitting={isSubmitting}>Submit</LoadingButton>
                        <Link
                        to="/login"
                        style={{marginLeft: 30}}
                        className="btn btn-lg btn-light-primary fw-bolder"
                        >
                        Cancel
                        </Link>
                    </div>
                    {/*end::Actions*/}
                    </form>
                    {/*end::Form*/}
                </div>
                {/*end::Wrapper*/}
                </div>
                {/*end::Content*/}
            </div>
            {/*end::Authentication - Password reset*/}
        </div>
    )
}

export default ConfirmPassword;