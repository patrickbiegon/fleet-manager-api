import { useEffect, useState, useContext } from "react";
import UserContext from "../../../context/user-context";
import TicketPlaceholder from "../../../../assets/img/ticket-placeholder.png";
import AppInput from "../../../layout/appComponents/input/AppInput";
import AppSelect from "../../../layout/appComponents/input/AppSelect";
import LoadingButton from "../../../layout/appComponents/LoadingButton";
import AppTextArea from "../../../layout/appComponents/input/AppTextArea";
import { serviceList } from "../../../utils/utils";

const TicketFormModal = ({ closeModal, carId, isSubmitting, submitTicket }) => {
    const userCtx = useContext(UserContext);

    const initialTicketFormValueState = {
        userId: userCtx.user.id,
        carId: carId,
        title: "",
        imagePath: "",
        details: "",
        cost: "",
        ticketType: 0,
        ticketStatus: 0,
        mileageAtSubmit: 100,
    }

    const [image, setImage] = useState(null);

    const [ticketFormValues, setTicketFormValues] = useState(initialTicketFormValueState);

    const isValidForm = () => ticketFormValues.title !== "" && ticketFormValues.details !== "" && ticketFormValues.type !== "" &&
        ticketFormValues.status !== "";


    const handleTicketFromValuesChange = (event) => {
        const { name, value } = event.target;
        setTicketFormValues(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (!isValidForm()) return;
        submitTicket(ticketFormValues);
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
        <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(24,28,50, 0.15)" }}
            id="kt_modal_users_search"
            tabIndex={-1}
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered mw-650px">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="fw-bolder text-center">Submit Ticket</h2>
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
                                <div className="fv-row mb-7">
                                    <label className="d-block fw-bold fs-6 mb-5">Avatar</label>
                                    <div
                                        className={`image-input image-input-outline ${!image && 'image-input-empty'}`}
                                        data-kt-image-input="true"
                                        style={{
                                            backgroundImage: `url(${TicketPlaceholder})`
                                        }}
                                    >
                                        <div
                                            className="image-input-wrapper w-125px h-125px"
                                            style={{
                                                backgroundImage: image ? `url(${TicketPlaceholder})` : 'none' // !userImage and backgroundImage none
                                            }}
                                        />
                                        <label
                                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                            data-kt-image-input-action="change"
                                            data-bs-toggle="tooltip"
                                            title="Change avatar"
                                        >
                                            <i className="bi bi-pencil-fill fs-7" />
                                            <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                            <input type="hidden" name="avatar_remove" />
                                        </label>
                                        <span
                                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                            data-kt-image-input-action="cancel"
                                            data-bs-toggle="tooltip"
                                            title="Cancel avatar"
                                        >
                                            <i className="bi bi-x fs-2" />
                                        </span>
                                        <span
                                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                            data-kt-image-input-action="remove"
                                            data-bs-toggle="tooltip"
                                            title="Remove avatar"
                                            onClick={() => setImage(null)}
                                        >
                                            <i className="bi bi-x fs-2" />
                                        </span>
                                    </div>
                                    <div className="form-text">
                                        Allowed file types: png, jpg, jpeg.
                                    </div>
                                </div>
                                <AppInput label="Title" name="title" placeholder="Title" value={ticketFormValues.title} onChange={handleTicketFromValuesChange} />
                                <AppTextArea label="Details" name="details" placeholder="Description..." value={ticketFormValues.details} onChange={handleTicketFromValuesChange} />
                                <AppInput label="Cost in Euro" name="cost" placeholder="0" type="number" value={ticketFormValues.cost} onChange={handleTicketFromValuesChange} />
                                <AppInput label="Mileage At Submit" name="mileageAtSubmit" placeholder="0" type="number" value={ticketFormValues.mileageAtSubmit} onChange={handleTicketFromValuesChange} />
                                <AppSelect label="Type" name="ticketType" value={ticketFormValues.ticketType} onChange={handleTicketFromValuesChange}
                                    options={serviceList}
                                />
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

export default TicketFormModal;