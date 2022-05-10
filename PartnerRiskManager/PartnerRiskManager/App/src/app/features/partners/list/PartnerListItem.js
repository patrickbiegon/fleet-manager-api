import { Link } from "react-router-dom";

const PartnerListItem = (props) => {
    const { partner} = props;

    const mileageColor = (mileage) => {
        if (mileage < 10000)
            return "green"
        else if (mileage < 30000)
            return "chartreuse"
        else if (mileage < 50000)
            return "yellow"
        else if (mileage < 80000)
            return "orange"
        else if (mileage >= 80000)
            return "red"
    }

    return (
        <tr>
            <td>{partner.id}</td>
            <td>
                <Link to={`/partners/${partner.id}`} className="text-gray-800 text-hover-primary mb-1">
                    {partner.brand }
                </Link>
            </td>
            <td>
                {partner.user
                    ? <Link to={`/users/${partner.user.id}`} className="badge badge-light-success">
                        {partner.user.firstName + " " + partner.user.lastName}
                    </Link>
                    : <div className="badge badge-light-warning">None</div>}
            </td>
            <td>
                <div className="badge badge-light">{partner.licencePlate}</div>
            </td>
            <td>{partner.mileage}</td>
            <td>
                {new Date(partner.firstRegistrationDate).toISOString().split('T')[0]}
            </td>
            <td className="text-end">
                <a href="#" className="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                    <span className="svg-icon svg-icon-5 m-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="black" />
                        </svg>
                    </span>
                </a>
                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
                    <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">View</a>
                    </div>
                    <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">Edit</a>
                    </div>
                    <div className="menu-item px-3">
                        <a href="#" data-kt-subscriptions-table-filter="delete_row" className="menu-link px-3">Delete</a>
                    </div>
                </div>
            </td>
        </tr>
    );
}

export default PartnerListItem;