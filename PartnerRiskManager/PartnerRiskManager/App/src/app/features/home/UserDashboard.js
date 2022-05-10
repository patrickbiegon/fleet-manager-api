import { useContext, useState, useEffect } from "react";
import agent from "../../api/agent";
import UserContext from "../../context/user-context";
import UserHeader from "./UserHeader";
import OverviewTab from "./tabs/overview/OverviewTab";
import MyProfileTab from "./tabs/profile/MyProfileTab";
import SettingsTab from "./tabs/settings/SettingsTab";
import TabNavItem from "../../layout/appComponents/navigation/TabNavItem";
import HistoryFormModal from "./modal/HistoryFormModal";
import ClipLoaderComponent from "../../layout/appComponents/loading/ClipLoaderComponent";

const UserDashboard = () => {
    const userCtx = useContext(UserContext);
    const [tickets, setTickets] = useState(null);
    const [histories, setHistories] = useState(null);
    const [loading, setLoading] = useState(true);
    const [ticketFormData, setTicketFormData] = useState(null);
    const [tab, setTab] = useState("overview");
    const [showHistoryModal, setShowHistoryModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        try {
            if (userCtx.user.role === "Admin") {
                const ticketData = await agent.Tickets.GetAll();
                const historyData = await agent.History.GetAll();

                setTickets(ticketData);
                setHistories(historyData);
            } else {
                const ticketData = await agent.Tickets.GetAllForUser(userCtx.user.id);
                const historyData = await agent.History.GetAllForUser(userCtx.user.id);

                setTickets(ticketData);
                setHistories(historyData);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    const solveTicket = formValues => {
        setIsSubmitting(true);
        agent.History.Add({ history: formValues })
            .then(() => {
                getData();
                setShowHistoryModal(false);
            })
            .catch(e => console.log(e))
            .finally(() => setIsSubmitting(false));
    }

    if (loading) return <ClipLoaderComponent />

    return (
        <>
            <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
                {showHistoryModal && <HistoryFormModal
                    closeModal={() => setShowHistoryModal(false)}
                    ticketFormData={ticketFormData}
                    isSubmitting={isSubmitting}
                    solveTicket={solveTicket}
                />}


                <div className="content flex-row-fluid" id="kt_content">
                    <div className="card mb-5 mb-xl-10">
                        <div className="card-body pt-9 pb-0">

                            <UserHeader user={userCtx.user} />

                            <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
                                <TabNavItem tab={tab} setTab={setTab} tabFor="overview" >Overview</TabNavItem>
                                <TabNavItem tab={tab} setTab={setTab} tabFor="profile" >Profile</TabNavItem>
                                <TabNavItem tab={tab} setTab={setTab} tabFor="settings" >Settings</TabNavItem>
                            </ul>

                        </div>
                    </div>
                    {(tab === "overview") && userCtx.user && <OverviewTab
                        tickets={tickets}
                        histories={histories}
                        showHistoryModal={() => setShowHistoryModal(true)}
                        setTicketFormData={setTicketFormData}
                        isAdmin={userCtx.user.role === "Admin"}
                    />}
                    {(tab === "profile") && <MyProfileTab />}
                    {(tab === "settings") && <SettingsTab />}
                </div>
            </div>
        </>
    );
}

export default UserDashboard;