import agent from "../../api/agent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UserHeader from "./details/UserHeader";
import OverviewTab from "./details/tabs/overview/OverviewTab";
import TabNavItem from "../../layout/appComponents/navigation/TabNavItem";
import ProfileDetails from "../home/tabs/profile/ProfileDetails";

const UserDetailsPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [tickets, setTickets] = useState(null);
    const [histories, setHistories] = useState(null);
    const [tab, setTab] = useState("overview");

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        try {
            const userData = await agent.Users.Get(id);
            const ticketsData = await agent.Tickets.GetAllForUser(id);
            const historyData = await agent.History.GetAllForUser(id);
            setUser(userData);
            setTickets(ticketsData);
            setHistories(historyData);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            {user &&
                <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
                    <div className="content flex-row-fluid" id="kt_content">
                        <div className="card mb-5 mb-xxl-8">
                            <div className="card-body pt-9 pb-0">

                                <UserHeader user={user} />


                                <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
                                    <TabNavItem tab={tab} setTab={setTab} tabFor="overview" >Overview</TabNavItem>
                                    <TabNavItem tab={tab} setTab={setTab} tabFor="profile" >Profile</TabNavItem>
                                </ul>

                            </div>
                        </div>

                        {(tab === "overview") && tickets && histories &&
                            <OverviewTab tickets={tickets} histories={histories}
                            />}
                        {(tab === "profile") && <ProfileDetails user={user} />}

                        <div className="row g-5 g-xxl-8">
                            <div className="col-xl-6">

                            </div>
                            <div className="col-xl-6">

                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default UserDetailsPage;