import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import Logo from "../../../assets/media/logos/logo-1.svg";
import Logo from "../../../assets/img/logo.png";
import agent from "../../api/agent";
import UserContext from "../../context/user-context";
import LoadingButton from "../../layout/appComponents/LoadingButton";

const Login = () => {
	const userCtx = useContext(UserContext);
	const history = useHistory();
	const [formValues, setFormValues] = useState({
		email: "",
		password: ""
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (userCtx.user)
			history.push("/");

	}, [userCtx, history]);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsSubmitting(true);
		agent.Account.login(formValues)
			.then(user => {
				userCtx.saveUser(user);
				history.push("/");
			})
			.catch(error => console.log(error))
			.finally(() => setIsSubmitting(false));
	}

	return (
		<div className="d-flex flex-column flex-root mt-20">
			<div className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" style={{ backgroundImage: "url(assets/media/illustrations/sigma-1/14.png" }}>
				<div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
					<div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
						<form className="form w-100" id="kt_sign_in_form" onSubmit={handleSubmit}>
							<div className="text-center mb-10">
								<h1 className="text-dark mb-3">Sign In to Partner Risk Assesor</h1>
							</div>
							<div className="fv-row mb-10">
								<label className="form-label fs-6 fw-bolder text-dark">Email</label>
								<input
									className="form-control form-control-lg form-control-solid"
									type="text"
									name="email"
									autoComplete="off"
									onChange={handleInputChange}
								/>
							</div>
							<div className="fv-row mb-10">
								<div className="d-flex flex-stack mb-2">
									<label className="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
									<Link to="/reset-password" className="link-primary fs-6 fw-bolder">Forgot Password ?</Link>
								</div>
								<input
									className="form-control form-control-lg form-control-solid"
									type="password"
									name="password"
									autoComplete="off"
									onChange={handleInputChange}
								/>
							</div>
							<div className="text-center">
								<LoadingButton classes="btn-lg w-100 mb-5" isSubmitting={isSubmitting}>Continue</LoadingButton>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login;