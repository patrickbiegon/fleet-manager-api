import { useContext, useState } from "react";
import UserContext from "../../../../context/user-context";
import EditProfileDetails from "./EditProfileDetails";
import ProfileDetails from "./ProfileDetails";

const MyProfileTab = () => {
    const userCtx = useContext(UserContext);
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            {!isEditing && <ProfileDetails user={userCtx.user} openEditForm={() => setIsEditing(true)} />}
            {isEditing && <EditProfileDetails user={userCtx.user} closeEditForm={() => setIsEditing(false)} saveUser={userCtx.saveUser} />}
        </>
    );
}

export default MyProfileTab;