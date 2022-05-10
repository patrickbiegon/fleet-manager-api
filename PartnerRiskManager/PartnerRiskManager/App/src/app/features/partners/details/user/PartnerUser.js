import AssignUserCard from "./AssignUserCard";
import PartnerUserInfo from "./PartnerUserInfo";

const PartnerUser = (props) => {
    const {user, handleDissociateUser, showModal} = props;

    if (user) return <PartnerUserInfo user={user} handleDissociateUser={handleDissociateUser} /> ;

    return <AssignUserCard showModal={showModal} />
}
 
export default PartnerUser;