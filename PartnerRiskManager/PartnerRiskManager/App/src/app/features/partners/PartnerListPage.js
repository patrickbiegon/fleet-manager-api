import PartnerList from "./list/PartnerList";
import { useState, useEffect } from "react"
import agent from "../../api/agent";
import AddPartnerModal from "./modal/AddPartnerModal";
import PartnerSearchInput from "./list/PartnerSearchInput";
import PartnerFilterButton from "./list/PartnerFilterButton";
import AddPartnerButton from "./list/AddPartnerButton";
import UploadFileModal from "../../layout/appComponents/UploadFileModal";
import PaginationComponent from "../../layout/appComponents/PaginationComponent";
import ExportPartnersButton from "./list/ExportPartnersButton";
import useRoles from "../../hooks/useRoles";
import { Link, useHistory } from "react-router-dom";

const PartnerListPage = () => {
    const role = useRoles();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [showAddPartnerModal, setShowAddPartnerModal] = useState(false);
    const [showUploadExcelModal, setShowUploadExcelModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [tableData, setTableData] = useState({
        partners: null,
        currentPage: 1,
        totalPages: 10,
        searchTerm: "",
    });

    useEffect(() => {
        if (role !== "Admin") history.push("/");
    }, [])


    const handleShowAddPartnerModal = () => setShowAddPartnerModal(prevState => setShowAddPartnerModal(!prevState));

    const handleShowUploadExcelModal = () => setShowUploadExcelModal(prevState => setShowUploadExcelModal(!prevState));

    useEffect(() => {
        getData();
    }, [])

    async function getData(page = 1) {
        setIsLoading(true);
        const data = await agent.Partners.GetByPage(page);
        console.log(data.items)
        setTableData(prevState => {
            return {
                ...prevState,
                partners: data.items,
                totalPages: data.totalPages,
                currentPage: data.currentPage
            }
        })
        setIsLoading(false);
    }

    const addPartner = formValues => {
        setIsSubmitting(true);
        agent.Partners.Add({ partner: formValues })
            .then(() => {
                getData();
                setShowAddPartnerModal(false);
            })
            .catch(e => console.log(e))
            .finally(() => setIsSubmitting(false));
    }

    const searchPartner = async (page = 1) => {
        setIsLoading(true);
        if (tableData.searchTerm.trim() === "") {
            await getData(page);
            setIsLoading(false);
        }
        else {
            agent.Partners.Search(tableData.searchTerm, page)
                .then(data => setTableData(prevState => {
                    return {
                        ...prevState,
                        partners: data.items,
                        totalPages: data.totalPages,
                        currentPage: data.currentPage
                    }
                }))
                .catch(e => console.log(e))
                .finally(() => setIsLoading(false));
        }
    }

    const uploadFile = formData => {
        setIsSubmitting(true);
        console.log(formData.get('File'));
        agent.Files.UploadPartnerExcel({ file: formData })
            .then(() => {
                getData();
                setShowUploadExcelModal(false);
            })
            .catch(e => console.log(e))
            .finally(() => setIsSubmitting(false));
    }

    return (
        <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl" >
            <div className="content flex-row-fluid" id="kt_content">
                <div className="card">
                    <div class="row">
                        <div className="col-md-2">
                            <div className="panel panel-default" style={{ width: '100%', border: '0px' }}>
                                <div className="panel-body" style={{ padding: '0px' }}>
                                    <div>
                                        <div style={{ marginTop: '20px', marginLeft: '2px' }}>
                                            <div>
                                                <Link to="/newassessment" className="btn btn-success" style={{ width: '180px' }}>
                                                    <i className="glyphicon glyphicon-plus" />
                                                    New Assessment</Link>
                                                <span><p><sub>Please refer to ITC regulations on Partner Risk Assessment
                                                </sub></p></span></div>
                                        </div>
                                        <div>
                                            <div>
                                                <ui className="list-group checked-list-box">
                                                    <li className="list-group-item  active" style={{ cursor: 'pointer' }}>
                                                        All
                                                        <span className="badge">112</span></li>
                                                    <li className="list-group-item" style={{ cursor: 'pointer' }}>
                                                        My Requests
                                                        <span className="badge">0</span></li>
                                                    <li className="list-group-item " style={{ cursor: 'pointer' }}>
                                                        My Section
                                                        <span className="badge">3</span></li>
                                                    <li className="list-group-item " style={{ cursor: 'pointer' }}>
                                                        Waiting for Me
                                                        <span className="badge">0</span></li>
                                                </ui>
                                            </div>

                                        </div>
                                        <br />
                                        <p>Approval Status</p>
                                        <div>
                                            <div>
                                                <ui className="list-group checked-list-box">
                                                    <li className="list-group-item active" style={{ cursor: 'pointer' }}>
                                                        All
                                                        <span className="badge">112</span></li>
                                                    <li className="list-group-item" style={{ cursor: 'pointer' }}>
                                                        Approved
                                                        <span className="badge">0</span></li>
                                                    <li className="list-group-item " style={{ cursor: 'pointer' }}>
                                                        Pending
                                                        <span className="badge">3</span></li>
                                                    <li className="list-group-item " style={{ cursor: 'pointer' }}>
                                                        Rejected
                                                        <span className="badge">0</span></li>
                                                </ui>
                                            </div>

                                        </div>
                                        <br />
                                        <p>Risk Status</p>

                                        <div>
                                            <div>
                                                <ui className="list-group checked-list-box">
                                                    <li className="list-group-item active" style={{ cursor: 'pointer' }}>
                                                        All
                                                        <span className="badge">112</span></li>
                                                    <li className="list-group-item" style={{ cursor: 'pointer' }}>
                                                        Low Risk
                                                        <span className="badge">0</span></li>
                                                    <li className="list-group-item " style={{ cursor: 'pointer' }}>
                                                        Medium Risk
                                                        <span className="badge">3</span></li>
                                                    <li className="list-group-item " style={{ cursor: 'pointer' }}>
                                                        High Risk
                                                        <span className="badge">0</span></li>
                                                </ui>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10" style={{ padding: '0px' }}>
                            <div className="card-header border-0 pt-6">
                                <div className="card-title">
                                    <PartnerSearchInput tableData={tableData} isLoading={isLoading} searchPartner={searchPartner} setSearchTerm={val => setTableData(prevData => { return { ...prevData, searchTerm: val } })} />
                                </div>
                                <div className="card-toolbar">
                                    <div className="d-flex justify-content-end" data-kt-subscription-table-toolbar="base" >
                                        <PartnerFilterButton />
                                        <ExportPartnersButton />
                                    </div>
                                </div>
                            </div>
                            <PartnerList partners={tableData.partners} isLoading={isLoading} />
                            <PaginationComponent
                                style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 50 }}
                                totalPages={tableData.totalPages}
                                currentPage={tableData.currentPage}
                                onPageChange={(page) => {
                                    searchPartner(page);
                                    window.scroll(0, 150)
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {showAddPartnerModal &&
                <AddPartnerModal
                    closeModal={handleShowAddPartnerModal}
                    addPartner={addPartner}
                    isSubmitting={isSubmitting}
                />
            }

            {showUploadExcelModal &&
                <UploadFileModal
                    closeModal={handleShowUploadExcelModal}
                    uploadFile={uploadFile}
                    isSubmitting={isSubmitting}
                    title={"Upload Partner List Excel"}
                />
            }
        </div>
    );
}

export default PartnerListPage;