import ClipLoaderComponent from "../../../layout/appComponents/loading/ClipLoaderComponent";
import PartnerListItem from "./PartnerListItem";

const PartnerList = (props) => {
    const { partners, isLoading } = props;
    const tableIsEmpty = partners && (partners.length == 0);

    if (isLoading) return <ClipLoaderComponent />

    return (
        <>
            <div className="partnerd-body pt-0">
                <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_subscriptions_table" >
                    <thead>
                        <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                            <th className="min-w-125px">Id</th>
                            <th className="min-w-125px">Partner Name</th>
                            <th className="min-w-125px">Project Manager</th>
                            <th className="min-w-125px">Type of Partner</th>
                            <th className="min-w-125px">Annual Turnover</th>
                            <th className="min-w-125px">Assessment Date</th>
                            <th className="text-end min-w-70px">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 fw-bold">
                        {partners && partners.map((partner) =>
                            <PartnerListItem key={partner.id} partner={partner} />
                        )}

                        {tableIsEmpty && 
                            <tr className="odd">
                                <td valign="top" colSpan={7} className="dataTables_empty text-center" style={{paddingTop: 50}}>No matching records found</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default PartnerList;