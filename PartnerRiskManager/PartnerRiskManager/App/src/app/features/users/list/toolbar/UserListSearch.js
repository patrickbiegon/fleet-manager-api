import { useEffect, useState, isLoading, useRef } from "react";
import SearchIcon from "./SearchIcon";

const UserListSearch = ({searchUsers, isLoading, setSearchTerm}) => {
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = event => {
        setSearchTerm(event.target.value);
        setSearchValue(event.target.value);
    }

    const isInitialMount = useRef(true);

    useEffect(() => {
        let waitBeforeSearch;
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            waitBeforeSearch = setTimeout(() => {
                searchUsers()
            }, 1000)
        }

        return () => clearTimeout(waitBeforeSearch);
    }, [searchValue]);

    return (
        <>
            <div className="d-flex align-items-center position-relative my-1">
                {!isLoading && <SearchIcon />}
                {isLoading && <span className="spinner-border spinner-border-sm position-absolute ms-6" />}

                <input type="text" data-kt-user-table-filter="search" className="form-control form-control-solid w-250px ps-14" placeholder="Search user" onChange={handleInputChange} />
            </div>
        </>
    );
}

export default UserListSearch;