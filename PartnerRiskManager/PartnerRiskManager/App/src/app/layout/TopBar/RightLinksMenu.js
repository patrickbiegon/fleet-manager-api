import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import PlaceholderPicture from "../../../assets/img/Profile-Placeholder.png";
import UserContext from "../../context/user-context";

const RightLinksMenu = ({ closeMenu }) => {
    const userCtx = useContext(UserContext);
    const history = useHistory();

    const handleLogout = () => {
        userCtx.signOutUser();
        history.push("/login");
    }

    return (
        <div className="backdrop" onClick={() => closeMenu()}>
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-primary menu-state-bg fw-bold py-4 fs-6 w-275px" data-kt-menu="true" style={{ display: "block", width: "100%", position: "fixed", top: "7%", right: "3%" }}>
                {/* begin::Menu item */}
                <div className="menu-item px-3">
                    <div className="menu-content d-flex flex-column align-items-center px-3">
                        {/* begin::Avatar */}
                        <div className="symbol symbol-50px me-5">
                            <img alt="Pic" src={userCtx.user.imgSrc ? userCtx.user.imgSrc : PlaceholderPicture} style={{ objectFit: "cover" }} />
                        </div>
                        {/* end::Avatar */}
                        {/* begin::Username */}
                        <div className="d-flex flex-column align-items-center" style={{ cursor: "default" }}>
                            <div className="fw-bolder d-flex align-items-center fs-5">{userCtx.user.name}</div>
                            <span className="fw-bold text-muted fs-7">{userCtx.user.email}</span>
                        </div>
                        {/* end::Username */}
                    </div>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu separator */}
                <div className="separator my-2"></div>
                {/* end::Menu separator */}
                {/* begin::Menu item */}
                <div className="menu-item px-5 d-flex flex-column align-items-center">
                    <Link to="/" className="menu-link px-5">My Profile</Link>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu separator */}
                <div className="separator my-2"></div>
                {/* end::Menu separator */}
                {/* begin::Menu item */}
                <div className="menu-item px-5 d-flex flex-column align-items-center">
                    <span className="menu-link px-5" onClick={handleLogout}>Sign Out</span>
                </div>
                {/* end::Menu item */}
            </div>
        </div>
    )
}

export default RightLinksMenu;