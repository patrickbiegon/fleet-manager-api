import MyHistories from "./history/SolvedHistories";
import Tickets from "./tickets/Tickets";

const OverviewTab = (props) => {
    const { tickets, histories } = props;

    return (
        <>
            <div className="row g-5 g-xl-8">
                <Tickets tickets={tickets} />
                <MyHistories histories={histories} />
            </div>

        </>
    );
}

export default OverviewTab;