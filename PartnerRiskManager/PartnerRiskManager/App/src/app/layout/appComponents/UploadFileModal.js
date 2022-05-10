import { useState } from "react";

const UploadFileModal = ({ closeModal, isSubmitting, uploadFile, title }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmission = () => {
        const formData = new FormData();
        formData.append('File', selectedFile);
        uploadFile(formData);
    };

    return (
        <>
            <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(24,28,50, 0.15)" }} aria-modal={true} role="dialog">
                <div className="modal-dialog modal-dialog-centered mw-650px">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="fw-bolder text-center">{title}</h2>
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
                        <div className="col-md-6 offset-md-3">
                            <div className="form-row">
                                <label className="text-white">Select File :</label>
                                <input type="file" className="form-control" name="file" onChange={changeHandler} />
                            </div>
                            <br />
                            <div className="form-row">
                                <div className="col-md-6">
                                    <button className="btn btn-dark" onClick={handleSubmission}>Save</button>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default UploadFileModal;