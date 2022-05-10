import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../../../context/user-context";

const PartnerHeader = ({ partner }) => {
    const userCtx = useContext(UserContext);

    return (
        <div className="card card-flush pt-3 mb-5 mb-xl-10">
            <div className="card-header">
                <div className="card-title">
                    <h2 className="fw-bolder">{partner.brand} {partner.model} - {partner.licencePlate}</h2>
                </div>
                <div className="card-toolbar">
                    {userCtx.user.role == "Admin" &&
                        <div className="btn btn-light-primary">Update Partner (Pending...)</div>
                    }
                </div>
            </div>
            <div className="card-body pt-3" style={{ paddingBottom: 0, display: "inline-block" }}>
                <div className="mb-10">
                    <h5 className="mb-4">Vehicle Details:</h5>
                    <div className="d-flex flex-wrap py-5" style={{ paddingBottom: 0 }}>
                        <div className="flex-equal me-5">
                            <table className="table fs-6 fw-bold gs-0 gy-2 gx-2 m-0">
                                <tbody>
                                    <tr>
                                        <td className="text-gray-400 min-w-175px w-175px">User:</td>
                                        <td className="text-gray-800 min-w-200px">
                                            {partner.user
                                                ? <Link to={`/users/${partner.user.id}`} className="text-gray-800 text-hover-primary mb-1">
                                                    {partner.user.firstName + " " + partner.user.lastName}
                                                </Link>
                                                : "None"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-gray-400">Brand:</td>
                                        <td className="text-gray-800">{partner.brand}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-gray-400">Model:</td>
                                        <td className="text-gray-800">{partner.model}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-gray-400">Year:</td>
                                        <td className="text-gray-800">{new Date(partner.firstRegistrationDate).getFullYear()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex-equal">
                            <table className="table fs-6 fw-bold gs-0 gy-2 gx-2 m-0">
                                <tbody>
                                    <tr>
                                        <td className="text-gray-400 min-w-175px w-175px">Chassis Series:</td>
                                        <td className="text-gray-800 min-w-200px">
                                            {partner.chassisSeries}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-gray-400">Licence Plate:</td>
                                        <td className="text-gray-800">{partner.licencePlate}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-gray-400">Mileage:</td>
                                        <td className="text-gray-800">{partner.mileage}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-gray-400">Color:</td>
                                        <td className="text-gray-800">{partner.color}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerHeader;