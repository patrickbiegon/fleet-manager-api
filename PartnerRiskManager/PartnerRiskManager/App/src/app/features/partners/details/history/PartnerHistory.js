import PartnerHistoryItem from "./PartnerHistoryItem";

const PartnerHistory = (props) => {
    const {historyList} = props;

    return ( 
        <>
            <div className="card card-flush pt-3 mb-5 mb-xl-10">
                <div className="card-header">
                    <div className="card-title">
                        <h2>Grantee Assessment Form</h2>
                    </div>
                    <div className="card-toolbar">
                        <ul className="nav nav-stretch fs-5 fw-bold nav-line-tabs nav-line-tabs-2x border-transparent" role="tablist">
                            <li className="nav-item" role="presentation">
                                <div id="kt_referrals_year_tab" className="nav-link text-active-primary active" data-bs-toggle="tab" role="tab">(Year Select - Pending...)</div>
                            </li>
                            <li className="nav-item" role="presentation">
                                <div id="kt_referrals_2019_tab" className="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab">2022</div>
                            </li>
                            <li className="nav-item" role="presentation">
                                <div id="kt_referrals_2018_tab" className="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab">2021</div>
                            </li>
                            <li className="nav-item" role="presentation">
                                <div id="kt_referrals_2017_tab" className="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab">2020</div>
                            </li>
                        </ul>
                    </div>
                </div>

                {historyList && historyList.length > 0 ?
                    <div className="card-body pt-2">
                        <div id="kt_referred_users_tab_content" className="tab-content">
                            <div id="kt_customer_details_invoices_1" className="tab-pane fade show active" role="tabpanel">
                                <div className="table-responsive">
                                    <table id="kt_customer_details_invoices_table_1" className="table align-middle table-row-dashed fs-6 fw-bolder gs-0 gy-4 p-0 m-0">
                                        <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bolder">
                                            <tr className="text-start text-gray-400">
                                                <th className="min-w-100px">ID</th>
                                                <th className="min-w-100px">Cost</th>
                                                <th className="min-w-100px">Type</th>
                                                <th className="min-w-125px">ExecDate</th>
                                                <th className="min-w-125px">Renew Date</th>
                                                <th className="min-w-100px">Paid</th>
                                                <th className="w-100px">(Pending...)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="fs-6 fw-bold text-gray-600">
                                            {historyList && historyList.map( (history, i) => 
                                                <PartnerHistoryItem history={history} key={i + 1} />
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    : <h3 style={{marginLeft: "50px"}}>No History yet!</h3>
                }
            </div>
        </>
     );
}
 
export default PartnerHistory;