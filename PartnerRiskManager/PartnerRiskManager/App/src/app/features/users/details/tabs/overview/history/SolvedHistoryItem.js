import { Link } from "react-router-dom";
import PlacholderImage from "../../../../../../../assets/img/solved-history-placeholder.jpg";
import utils from "../../../../../../utils/utils";

const SolvedHistoryItem = (props) => {
    const { historyItem } = props;

    return (
        <>
            <tr>
                <td>
                    <div className="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
                        {/* <span className="symbol-label"> */}
                        <img src={historyItem.imagePath ? historyItem.imagePath : PlacholderImage} alt="" />
                        {/* </span> */}
                    </div>
                </td>
                <td>
                    <div className="text-dark fw-bolder text-hover-primary mb-1 fs-6">{historyItem.title ? historyItem.title : "Title Pending..."}</div>
                    <span className="text-muted fw-bold d-block">{historyItem.details}</span>
                </td>
                <td>
                    <span className="text-muted fw-bold d-block fs-7">{historyItem.isPayed ? "Paid" : "Unpaid"}</span>
                    <span className="text-dark fw-bolder d-block fs-5">{historyItem.cost}€</span>
                </td>
                <td className="text-end">
                    <span className={"text-" + utils.Services.ServiceColor(historyItem.serviceType) + " fs-7 fw-bolder"}>
                        {utils.Services.ServiceType(historyItem.serviceType)}
                    </span>
                </td>
                <td className="text-end">
                    {/* <div className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"> */}
                    <Link to={`/partners/${historyItem.carId}`} className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                        To Partner
                    </Link>
                    {/* </div> */}
                </td>
            </tr>

        </>
    );
}

export default SolvedHistoryItem;