import UserListAdd from "./toolbar/UserListAdd";
import UserListAddExcel from "./toolbar/UserListAddExcel";
import UserListExport from "./toolbar/UserListExport";
import UserListFilter from "./toolbar/UserListFilter";
import UserListSearch from "./toolbar/UserListSearch";

const UserListHeader = (props) => {
    const { handleShowAddUserModal, handleShowUploadExcelModal, searchUsers, isFetchingData, setSearchTerm } = props;

    return (
        <>
            <div className="card-header border-0 pt-6">
                <div className="card-title">
                    <UserListSearch searchUsers={searchUsers} isLoading={isFetchingData} setSearchTerm={setSearchTerm} />
                </div>
                <div className="card-toolbar">
                    <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                        <UserListFilter />
                        <UserListExport />
                        <UserListAdd handleShowAddUserModal={handleShowAddUserModal} />
                        <UserListAddExcel handleShowUploadExcelModal={handleShowUploadExcelModal} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserListHeader;