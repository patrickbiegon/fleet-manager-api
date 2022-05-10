import utils from "../../../../../utils/utils";
import { Link } from "react-router-dom";
import TicketPlaceholder from "../../../../../../assets/img/ticket-placeholder.png";

const TicketItem = (props) => {
    const { ticket, showHistoryModal, setTicketFormData } = props;

    const handleSolveTicket = () => {
        setTicketFormData(ticket);
        showHistoryModal();
    }

    return (
        <>
            <div className="d-flex mb-7">
                <div className="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
                    <img src={ticket.imagePath ? ticket.imagePath : TicketPlaceholder} className="mw-100" alt="" />
                </div>
                <div className="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
                    <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                        <div className="fs-5 text-gray-800 text-hover-primary fw-bolder fancy-link" onClick={handleSolveTicket} style={{ cursor: "pointer" }}>
                            {ticket.title}
                        </div>
                        <span className="text-gray-400 fw-bold fs-7 my-1">{utils.Text.Shorten(ticket.details)}</span>
                        <span className="text-gray-400 fw-bold fs-7">By:
                            <Link to={`/users/${ticket.user.id}`} className="text-primary fw-bold">
                                {ticket.user.firstName + " " + ticket.user.lastName}
                            </Link>
                            <span className={`badge badge-light-${utils.Services.StatusColor(ticket.status)} fs-8 fw-bolder my-2`}>
                                {utils.Services.Status(ticket.status)}
                            </span>
                        </span>
                    </div>
                    <div className="text-end py-lg-0 py-2">
                        <span className="text-gray-800 fw-boldest fs-3">{ticket.cost}€</span>
                        <span className="text-gray-400 fs-7 fw-bold d-block">{new Date(ticket.date).toISOString().split('T')[0]}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TicketItem;