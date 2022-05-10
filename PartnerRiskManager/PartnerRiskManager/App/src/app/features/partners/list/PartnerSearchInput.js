import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import SearchIcon from "../../users/list/toolbar/SearchIcon";

const PartnerSearchInput = ({isLoading, searchPartner, setSearchTerm}) => {
    const [inputValue, setInputValue] = useState("");

    const isInitialMount = useRef(true);

    useEffect(() => {
        let waitBeforeSearch;
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            waitBeforeSearch = setTimeout(() => {
                searchPartner()
            }, 1000)
        }

        return () => clearTimeout(waitBeforeSearch);
    }, [inputValue]);

    const handleInputChange = event => {
        setSearchTerm(event.target.value);        
        setInputValue(event.target.value);
    };

    return (
        <div className="d-flex align-items-center position-relative my-1">
            {!isLoading && <SearchIcon isLoading={isLoading} />}
            {isLoading && <span className="spinner-border spinner-border-sm position-absolute ms-6" />}
            <input
                type="text"
                data-kt-subscription-table-filter="search"
                className="form-control form-control-solid w-650px ps-14"
                placeholder="Search Partner by name, type, registration, etc "
                value={inputValue}
                onChange={handleInputChange}
            />
        </div>
    )
}

export default PartnerSearchInput;