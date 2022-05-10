import { useState, useEffect } from "react";
import agent from "../../api/agent";
import AddUserModal from "./list/modal/AddUserModal";
import UserListHeader from "./list/UserListHeader";
import UserListBody from "./list/UserListBody";
import UploadFileModal from "../../layout/appComponents/UploadFileModal";
import PaginationComponent from "../../layout/appComponents/PaginationComponent";


const UserListPage = () => {
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [showUploadExcelModal, setShowUploadExcelModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFetchingData, setIsFetchingData] = useState(false);
    const [tableData, setTableData] = useState({
        users: null,
        currentPage: 1,
        totalPages: 10,
        searchTerm: "",       
    });

    const handleShowAddUserModal = () => setShowAddUserModal(prevState => { return !prevState })

    const handleShowUploadExcelModal = () => setShowUploadExcelModal(prevState => setShowUploadExcelModal(!prevState));

    useEffect(() => {
        getAllUsers();
    }, [])

    async function getAllUsers(page=1) {
        setIsFetchingData(true);
        const data = await agent.Users.GetByPage(page);
        setTableData(prevState => {
            return {
                ...prevState,
                users: data.items,
                totalPages: data.totalPages,
                currentPage: data.currentPage
            }
        })
        setIsFetchingData(false);
    }

    const registerUser = formValues => {
        setIsSubmitting(true);
        agent.Account.register(formValues)
            .then(() => {
                getAllUsers();
                setShowAddUserModal(false);
            })
            .catch(e => console.log(e))
            .finally(() => setIsSubmitting(false));
    }

    const uploadFile = formData => {
        setIsSubmitting(true);
        agent.Files.UploadUserExcel({ file: formData })
            .then(() => {
                getAllUsers();
                setShowUploadExcelModal(false);
            })
            .catch(e => console.log(e))
            .finally(() => setIsSubmitting(false));
    }

    const searchUsers = async (page=1) => {
        setIsFetchingData(true);
        if (tableData.searchTerm.trim() === "") {
            await getAllUsers(page);
            setIsFetchingData(false);
        }
        else {
            agent.Users.Search(tableData.searchTerm, page)
                .then(data => setTableData(prevState => {
                    return {
                        ...prevState,
                        users: data.items,
                        totalPages: data.totalPages,
                        currentPage: data.currentPage
                    }
                }))
                .catch(e => console.log(e))
                .finally(() => setIsFetchingData(false));
        }
    }

    return (
        <>
            {showAddUserModal &&
                <AddUserModal closeModal={handleShowAddUserModal} registerUser={registerUser} isSubmitting={isSubmitting} />}
            {showUploadExcelModal &&
                <UploadFileModal closeModal={handleShowUploadExcelModal} uploadFile={uploadFile} isSubmitting={isSubmitting} title={"Upload User List Excel"} />}

            <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
                <div className="content flex-row-fluid" id="kt_content">
                    <div className="card">

                        <UserListHeader 
                            handleShowAddUserModal={handleShowAddUserModal} 
                            handleShowUploadExcelModal={handleShowUploadExcelModal}
                            searchUsers={searchUsers} isFetchingData={isFetchingData} 
                            setSearchTerm={val=>setTableData(prevData=>{return {...prevData, searchTerm: val}})}
                        />

                        <UserListBody users={tableData.users} isFetchingData={isFetchingData} />
                        <PaginationComponent 
                            style={{display: "flex", alignItems:"center", justifyContent:"center", marginBottom: 50}} 
                            totalPages={tableData.totalPages}
                            currentPage={tableData.currentPage}
                            onPageChange={(page) => {
                                searchUsers(page);
                                window.scroll(0, 150)
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserListPage;