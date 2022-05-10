import UserPhoto from "../../../../../assets/media/avatars/150-1.jpg";
import LoadingButton from "../../../../layout/appComponents/LoadingButton";
import AppInput from "../../../../layout/appComponents/input/AppInput";
import { useEffect } from "react";
import { useState } from "react";
import AvatarInput from "../../../../layout/appComponents/input/AvatarInput";

const AddUserModal = ({ closeModal, registerUser, isSubmitting }) => {
  const initialUserFormValueState = {
    firstName: "",
    lastName: "",
    email: "",
    cnp: "",
    phoneNumber: "",
    address: "",
    role: "Employee"
  }

  const [userFormValues, setUserFormValues] = useState(initialUserFormValueState);

  const isValidForm = () => userFormValues.firstName !== "" && userFormValues.lastName !== "" && userFormValues.email !== "" &&
    userFormValues.cnp !== "" && userFormValues.phoneNumber !== "" && userFormValues.address !== "";


  const handleUserFromValuesChange = (event) => {
    const { name, value } = event.target;
    setUserFormValues(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (!isValidForm()) return;
    registerUser(userFormValues);
  }

  function escFunction(event) {
    if (event.keyCode === 27) {
      closeModal();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => document.removeEventListener("keydown", escFunction, false);
  }, []);

  return (
    <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(24,28,50, 0.15)" }} aria-modal={true} role="dialog">
      <div className="modal-dialog modal-dialog-centered mw-650px">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="fw-bolder text-center">Add User</h2>
            <div className="btn btn-icon btn-sm btn-active-icon-primary" onClick={closeModal}>
              <span className="svg-icon svg-icon-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    opacity="0.5"
                    x={6}
                    y="17.3137"
                    width={16}
                    height={2}
                    rx={1}
                    transform="rotate(-45 6 17.3137)"
                    fill="black"
                  />
                  <rect
                    x="7.41422"
                    y={6}
                    width={16}
                    height={2}
                    rx={1}
                    transform="rotate(45 7.41422 6)"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
            <form id="kt_modal_add_user_form" className="form" onSubmit={handleSubmit}>
              <div
                className="d-flex flex-column scroll-y me-n7 pe-7"
                id="kt_modal_add_user_scroll"
                data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}"
                data-kt-scroll-max-height="auto"
                data-kt-scroll-dependencies="#kt_modal_add_user_header"
                data-kt-scroll-wrappers="#kt_modal_add_user_scroll"
                data-kt-scroll-offset="300px"
              >
                <AvatarInput className="fv-row mb-7" userAvatar={UserPhoto} />
                <AppInput label="First Name" labelClasses="required fw-bold fs-6 mb-2" inputClasses="form-control form-control-solid mb-3 mb-lg-0" name="firstName" placeholder="John" value={userFormValues.firstName} onChange={handleUserFromValuesChange} />
                <AppInput label="Last Name" labelClasses="required fw-bold fs-6 mb-2" inputClasses="form-control form-control-solid mb-3 mb-lg-0" name="lastName" placeholder="Doe" value={userFormValues.lastName} onChange={handleUserFromValuesChange} />
                <AppInput type="email" label="Email" labelClasses="required fw-bold fs-6 mb-2" inputClasses="form-control form-control-solid mb-3 mb-lg-0" name="email" placeholder="example@domain.com" value={userFormValues.email} onChange={handleUserFromValuesChange} />
                <AppInput label="CNP" labelClasses="required fw-bold fs-6 mb-2" inputClasses="form-control form-control-solid mb-3 mb-lg-0" name="cnp" placeholder="12345678901234" value={userFormValues.cnp} onChange={handleUserFromValuesChange} />
                <AppInput label="Phone Number" labelClasses="required fw-bold fs-6 mb-2" inputClasses="form-control form-control-solid mb-3 mb-lg-0" name="phoneNumber" placeholder="12345678901234" value={userFormValues.phoneNumber} onChange={handleUserFromValuesChange} />
                <AppInput label="Address" labelClasses="required fw-bold fs-6 mb-2" inputClasses="form-control form-control-solid mb-3 mb-lg-0" name="address" placeholder="Personal address" value={userFormValues.address} onChange={handleUserFromValuesChange} />
                <div className="mb-7">
                  <label className="required fw-bold fs-6 mb-5">Role</label>
                  <div className="d-flex fv-row">
                    <div className="form-check form-check-custom form-check-solid">
                      <input
                        className="form-check-input me-3"
                        name="role"
                        type="radio"
                        value="Admin"
                        id="kt_modal_update_role_option_0"
                        checked={userFormValues.role === "Admin"}
                        onChange={handleUserFromValuesChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="kt_modal_update_role_option_0"
                      >
                        <div className="fw-bolder text-gray-800">Admin</div>
                        <div className="text-gray-600">
                          Company manager
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="separator separator-dashed my-5" />
                  <div className="d-flex fv-row">
                    <div className="form-check form-check-custom form-check-solid">
                      <input
                        className="form-check-input me-3"
                        name="role"
                        type="radio"
                        value="Employee"
                        id="kt_modal_update_role_option_1"
                        checked={userFormValues.role === "Employee"}
                        onChange={handleUserFromValuesChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="kt_modal_update_role_option_1"
                      >
                        <div className="fw-bolder text-gray-800">Employee</div>
                        <div className="text-gray-600">
                          Company employee
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center pt-15">
                <button
                  type="reset"
                  className="btn btn-light me-3"
                  onClick={closeModal}
                >
                  Discard
                </button>
                <LoadingButton isSubmitting={isSubmitting}>Submit</LoadingButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUserModal;