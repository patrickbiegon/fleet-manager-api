import { Link } from "react-router-dom";
import utils from "../../../../utils/utils";

const PartnerHistoryItem = (props) => {
    const { history } = props;

    return (
        <tr>
            <td>
                <Link to={`/`} className="text-gray-600 text-hover-primary">{history.id}</Link>
            </td>
            <td className="text-success">€{history.cost}</td>
            <td>{utils.Services.ServiceType(history.serviceType)}</td>
            <td>{new Date(history.executionDate).toISOString().split('T')[0]}</td>
            <td>{new Date(history.renewDate).toISOString().split('T')[0]}</td>
            <td className={"text-" + (history.isPayed ? "success" : "danger")}>{history.isPayed ? "Yes" : "No"}</td>
            <td className="">
                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
            </td>
        </tr>
    );
}

export default PartnerHistoryItem;