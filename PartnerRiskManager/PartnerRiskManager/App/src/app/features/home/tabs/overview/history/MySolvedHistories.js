import Toolbar from "../tickets/Toolbar";
import SolvedHistoryItem from "./SolvedHistoryItem";

const MySolvedHistories = (props) => {
    const { histories } = props;

    return (
        <>
            <div className="col-xl-6">
                <div className="card card-xl-stretch mb-5 mb-xl-8">
                    <div className="card-header border-0 pt-5">
                        <h3 className="card-title align-items-start flex-column">
                            <span className="card-label fw-bolder fs-3 mb-1">My Solved History</span>
                            <span className="text-muted mt-1 fw-bold fs-7">{histories.length} ticket(s) processed. Nice job! ;P</span>
                        </h3>
                        <Toolbar />
                    </div>
                    <div className="card-body py-3">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="kt_table_widget_6_tab_1">
                                <div className="table-responsive">
                                    <table className="table align-middle gs-0 gy-3">
                                        <thead>
                                            <tr>
                                                <th className="p-0 w-50px" />
                                                <th className="p-0 min-w-150px" />
                                                <th className="p-0 min-w-140px" />
                                                <th className="p-0 min-w-120px" />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {histories && histories.map((historyItem, i) =>
                                                <SolvedHistoryItem historyItem={historyItem} key={i + 1} />
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MySolvedHistories;