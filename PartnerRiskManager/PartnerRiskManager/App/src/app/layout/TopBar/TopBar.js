import { Link } from "react-router-dom"
import NavLinks from "./NavLinks"
import RightLinks from "./RightLinks"

import MainLogo from "../../../assets/media/logos/logo-demo2.png"
import MainStickyLogo from "../../../assets/media/logos/logo-demo2-sticky.png";

const TopBar = () => {
    return (
        <div id="kt_header" className="header align-items-stretch" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{default: '200px', lg: '300px'}">
            <div className="container-xxl d-flex align-items-center">
                
                {/* begin::Wrapper */}
                <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
                    {/* begin::Navbar */}
                    <NavLinks />
                    {/* end::Navbar */}
                    <RightLinks />
                </div>
                {/* end::Wrapper */}
            </div>
        </div>
    )
}

export default TopBar;