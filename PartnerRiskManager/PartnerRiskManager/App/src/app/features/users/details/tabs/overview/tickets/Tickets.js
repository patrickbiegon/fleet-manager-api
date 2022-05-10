import TicketItem from "./TicketItem";
import Toolbar from "./Toolbar";

const TicketsUnresolved = (props) => {
    const { tickets } = props;

    return (
        <>
            <div className="col-xl-6">
                <div className="card card-xl-stretch mb-5 mb-xl-8">
                    <div className="card-header align-items-center border-0 mt-3">
                        <h3 className="card-title align-items-start flex-column">
                            <span className="fw-bolder text-dark fs-3">Unresolved Tickets</span>
                            <span className="text-gray-400 mt-2 fw-bold fs-6">This user has {tickets.length} unresolved Tickets</span>
                        </h3>
                        <Toolbar />
                    </div>
                    <div className="card-body pt-5">
                        {tickets && tickets.map((ticket, i) =>
                            <TicketItem ticket={ticket} key={i + 1} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TicketsUnresolved;