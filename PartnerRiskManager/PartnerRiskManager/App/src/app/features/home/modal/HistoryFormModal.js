import { useEffect, useState, useContext } from "react";
import UserContext from "../../../context/user-context";
import AppInput from "../../../layout/appComponents/input/AppInput";
import LoadingButton from "../../../layout/appComponents/LoadingButton";
import utils, { statusList } from "../../../utils/utils";
import AppSwitch from "../../../layout/appComponents/input/AppSwitch";
import AppSelect from "../../../layout/appComponents/input/AppSelect";
import HistoryPlaceholder from "../../../../assets/img/solved-history-placeholder.jpg";

const TicketFormModal = ({ closeModal, isSubmitting, solveTicket, ticketFormData }) => {
    const userCtx = useContext(UserContext);

    const initialHistoryFormValueState = {
        userId: ticketFormData.userId,
        carId: ticketFormData.carId,
        title: ticketFormData.title,
        imagePath: ticketFormData.imagePath,
        details: ticketFormData.details,
        cost: ticketFormData.cost,
        serviceType: ticketFormData.type,
        status: ticketFormData.status,
        executionDate: ticketFormData.date,
        mileageAtExecution: ticketFormData.mileageAtSubmit,
        renewDate: new Date(Date.now()).toISOString().split('T')[0],
        isPayed: false,
        adminId: userCtx.user.id,
        ticketId: ticketFormData.id
    }

    const [historyFormValues, setHistoryFormValues] = useState(initialHistoryFormValueState);

    const isValidForm = () => initialHistoryFormValueState.title !== "" && initialHistoryFormValueState.details !== "" && initialHistoryFormValueState.type !== "" &&
        initialHistoryFormValueState.status !== "";


    const handleHistoryFromValuesChange = (event) => {
        const { name, value } = event.target;
        setHistoryFormValues(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    const handleCheckboxChange = () => {
        setHistoryFormValues(prevState => {
            return {
                ...prevState,
                isPayed: !prevState.isPayed
            }
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (!isValidForm()) return;
        solveTicket(historyFormValues);
    }

    const escFunction = event => {
        if (event.keyCode === 27) closeModal();
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
                        <h2 className="fw-bolder text-center">Solve Ticket</h2>
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
                                <div className="row g-9 mb-8">
                                    <div className="col-md-6 fv-row">
                                        <h2>{historyFormValues.title}</h2>
                                        <div className="text-gray-400 fw-bold fs-7 my-1">
                                            {utils.Text.Date(historyFormValues.executionDate)}
                                        </div>
                                        <div className="fs-6 fw-bold mb-2">Current Mileage: {historyFormValues.mileageAtExecution} Km</div>
                                        <div className="fs-6 fw-bold mb-2">Service Type: {utils.Services.ServiceType(historyFormValues.serviceType)}</div>
                                        <div className="fw-bold fs-6 mb-2">Cost: {historyFormValues.cost}€</div>
                                    </div>
                                    <div className="col-md-6 fv-row">
                                        <label className="d-block fw-bold fs-6 mb-5">{initialHistoryFormValueState.imagePath ? "Image" : ""}</label>
                                        <img
                                            src={initialHistoryFormValueState.imagePath ? initialHistoryFormValueState.imagePath : HistoryPlaceholder}
                                            alt="Pic" style={{ width: "100%" }}
                                        />
                                    </div>
                                </div>
                                <div className="row g-9 mb-8">
                                    {/* <div className="col-md-6 fv-row"> */}
                                    <div className="fs-6 fw-bold mb-2">Details:</div>
                                    <div className="d-flex align-items-center">{historyFormValues.details}</div>
                                    {/* </div> */}
                                </div>

                                <div className="row g-9 mb-8">
                                    <div className="col-md-6 fv-row">
                                        <AppSelect label="Status" name="status" value={historyFormValues.status} onChange={handleHistoryFromValuesChange}
                                            options={statusList}
                                        />
                                    </div>
                                    <div className="col-md-6 fv-row">
                                        <AppInput
                                            label="Renewal Date"
                                            name="renewDate"
                                            placeholder="Renewal Date"
                                            type="date"
                                            value={historyFormValues.renewDate}
                                            onChange={handleHistoryFromValuesChange}
                                        />
                                    </div>
                                </div>

                                <div className="row g-9 mb-8">
                                    <AppSwitch
                                        label="Paid"
                                        name="isPayed"
                                        value={historyFormValues.isPayed}
                                        onChange={handleCheckboxChange}
                                    />
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

export default TicketFormModal;