import ProfilePlaceholder from "../../../../../assets/img/Profile-Placeholder.png";
import { Link } from "react-router-dom";

const UserListItem = (props) => {
    const { user } = props;

    return (
        <>
            <tr>
                <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <a href="../../demo2/dist/apps/user-management/users/view.html">
                            <div className="symbol-label">
                                <img src={user.imgSrc ? user.imgSrc : ProfilePlaceholder} alt="Pic" className="w-100" />
                            </div>
                        </a>
                    </div>
                    <div className="d-flex flex-column">
                        <Link to={`/users/${user.id}`} className="text-gray-800 text-hover-primary mb-1">
                            {user.firstName + " " + user.lastName}
                        </Link>
                        <span>{user.email}</span>
                    </div>
                </td>
                <td>Administrator</td>
                <td>
                    <div className="badge badge-light fw-bolder">Yesterday</div>
                </td>
                <td>
                    {user.car
                        ? <Link to={`/partners/${user.car.id}`} className="badge badge-light-success">
                            {user.car.brand + " " + user.car.model}
                        </Link>
                        : <div className="badge badge-light-warning">None</div>}
                </td>
                <td>24 Jun 2021, 2:40 pm (Pending)</td>
            </tr>
        </>
    );
}

export default UserListItem;