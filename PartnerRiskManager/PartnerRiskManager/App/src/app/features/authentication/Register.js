import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../../assets/media/logos/logo-1.svg";
import agent from "../../api/agent";
import UserContext from "../../context/user-context";

const Register = () => {
    const history = useHistory();
    const userCtx = useContext(UserContext);
	const [formValues, setFormValues] = useState({
		email: "",
		password: ""
	});

    useEffect(() => {
		if (!userCtx.user) 
			history.push("/");
	}, [userCtx, history]);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
    	setFormValues({...formValues, [name]: value});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		agent.Account.register(formValues)
			.then(() => {
				history.push("/login");
			})
			.catch(error => console.log(error));
	}


    return (
        <div className="d-flex flex-column flex-root">
			{/* begin::Authentication - Sign-up  */}
			<div className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" style={{backgroundImage: "url(../../../assets/media/illustrations/sigma-1/14.png"}}>
				{/* begin::Content */}
				<div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
					{/* begin::Logo */}
					<img alt="Logo" src={Logo} className="h-40px my-12" />
					{/* end::Logo */}
					{/* begin::Wrapper */}
					<div className="w-lg-600px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
						{/* begin::Form */}
						<form className="form w-100" id="kt_sign_up_form" onSubmit={handleSubmit}>
							{/* begin::Separator */}
							<div className="d-flex align-items-center mb-10">
								<div className="border-bottom border-gray-300 mw-50 w-100"></div>
								<span className="fw-bold text-gray-400 fs-7 mx-2">OR</span>
								<div className="border-bottom border-gray-300 mw-50 w-100"></div>
							</div>
							{/* end::Separator */}
							{/* begin::Input group */}
							<div className="row fv-row mb-7">
								{/* begin::Col */}
								<div className="col-xl-6">
									<label className="form-label fw-bolder text-dark fs-6">First Name</label>
									<input className="form-control form-control-lg form-control-solid" type="text" placeholder="" name="first-name" autoComplete="off" />
								</div>
								{/* end::Col */}
								{/* begin::Col */}
								<div className="col-xl-6">
									<label className="form-label fw-bolder text-dark fs-6">Last Name</label>
									<input className="form-control form-control-lg form-control-solid" type="text" placeholder="" name="last-name" autoComplete="off" />
								</div>
								{/* end::Col */}
							</div>
							{/* end::Input group */}
							{/* begin::Input group */}
							<div className="fv-row mb-7">
								<label className="form-label fw-bolder text-dark fs-6">Email</label>
								<input className="form-control form-control-lg form-control-solid" type="email" placeholder="" name="email" autoComplete="off" onChange={handleInputChange}/>
							</div>
							{/* end::Input group */}
							{/* begin::Input group */}
							<div className="mb-10 fv-row" data-kt-password-meter="true">
								{/* begin::Wrapper */}
								<div className="mb-1">
									{/* begin::Label */}
									<label className="form-label fw-bolder text-dark fs-6">Password</label>
									{/* end::Label */}
									{/* begin::Input wrapper */}
									<div className="position-relative mb-3">
										<input className="form-control form-control-lg form-control-solid" type="password" placeholder="" name="password" autoComplete="off" onChange={handleInputChange} />
										<span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
											<i className="bi bi-eye-slash fs-2"></i>
											<i className="bi bi-eye fs-2 d-none"></i>
										</span>
									</div>
									{/* end::Input wrapper */}
								</div>
								{/* end::Wrapper */}
							</div>
							{/* end::Input group= */}
							{/* begin::Input group */}
							<div className="fv-row mb-5">
								<label className="form-label fw-bolder text-dark fs-6">Confirm Password</label>
								<input className="form-control form-control-lg form-control-solid" type="password" placeholder="" name="confirm-password" autoComplete="off" />
							</div>
							{/* end::Input group */}
							{/* begin::Actions */}
							<div className="text-center">
								<button type="submit" id="kt_sign_up_submit" className="btn btn-lg btn-primary">
									<span className="indicator-label">Submit</span>
									<span className="indicator-progress">Please wait...
									<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
								</button>
							</div>
							{/* end::Actions */}
						</form>
						{/* end::Form */}
					</div>
					{/* end::Wrapper */}
				</div>
				{/* end::Content */}
			</div>
			{/* end::Authentication - Sign-up */}
		</div>
    )
}

export default Register;