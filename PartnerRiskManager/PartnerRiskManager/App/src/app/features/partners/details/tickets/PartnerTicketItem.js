import utils from "../../../../utils/utils";

const PartnerTicketItem = (props) => {
    const { ticket } = props;

    return (
        <>
            <tr>
                <td>
                    <label className="w-150px">{ticket.title}</label>
                    <div className="fw-normal text-gray-600">{utils.Text.Shorten(ticket.details)}</div>
                </td>
                <td>
                    <span className={`badge badge-light-${utils.Services.StatusColor(ticket.status)}`}>{utils.Services.Status(ticket.status)}</span>
                </td>
                <td>{utils.Services.ServiceType(ticket.type)}</td>
                <td>{new Date(ticket.date).toISOString().split('T')[0]}</td>
                {/* <td className="text-end">
                    <Link to="#" className="btn btn-icon btn-active-light-primary w-30px h-30px" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                        <span className="svg-icon svg-icon-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="black" />
                                <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="black" />
                            </svg>
                        </span>
                    </Link>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-6 w-200px py-4" data-kt-menu="true">
                        <div className="menu-item px-3">
                            <Link to="#" className="menu-link px-3">Pause Subscription</Link>
                        </div>
                        <div className="menu-item px-3">
                            <Link href="#" className="menu-link px-3" data-kt-subscriptions-view-action="delete">Edit Subscription</Link>
                        </div>
                        <div className="menu-item px-3">
                            <Link href="#" className="menu-link text-danger px-3" data-kt-subscriptions-view-action="edit">Cancel Subscription</Link>
                        </div>
                    </div>
                </td> */}
            </tr>
        </>
    );
}

export default PartnerTicketItem;