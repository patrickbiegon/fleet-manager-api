import { useContext, useState } from "react";
import UserContext from "../../../../../context/user-context";
import EditPasswordFrom from "./EditPasswordForm";
import PasswordField from "./PasswordField";
import EmailField from "./EmailField";
import EditEmailForm from "./EditEmailForm";

const SignInMethod = () => {
    const userCtx = useContext(UserContext);
    const [isEditingPassword, setIsEditingPassword] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);

    return (
        <div className="card mb-5 mb-xl-10">
            <div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_signin_method">
                <div className="card-title m-0">
                    <h3 className="fw-bolder m-0">Sign-in Method</h3>
                </div>
            </div>
            <div id="kt_account_settings_signin_method" className="collapse show">
                <div className="card-body border-top p-9">
                    <div className="d-flex flex-wrap align-items-center">
                        {!isEditingEmail && <EmailField email={userCtx.user.email} setIsEditingEmail={setIsEditingEmail} />}
                        {isEditingEmail && <EditEmailForm user={userCtx.user} closeForm={() => setIsEditingEmail(false)} />}
                    </div>

                    <div className="separator separator-dashed my-6" />

                    <div className="d-flex flex-wrap align-items-center mb-10">
                        {!isEditingPassword && <PasswordField setIsEditingPassword={setIsEditingPassword} /> }

                        {isEditingPassword &&
                            <EditPasswordFrom closeForm={() => setIsEditingPassword(false)} />
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInMethod;