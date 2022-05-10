import { useEffect, useContext, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import UserContext from "../../context/user-context";
import { toast } from "react-toastify";
import agent from "../../api/agent";

function useQuery() {
    const { search } = useLocation();
  
    return useMemo(() => new URLSearchParams(search), [search]);
}

const ChangeEmail = () => {
    let query = useQuery();
    const history = useHistory();
    const userCtx = useContext(UserContext);

    useEffect(() => {
        const userId = query.get("uid");
        const token = query.get("token");
        
        if (!userId || !token) {
            history.push("/");
            toast.error("Something went wrong");
            return;
        }

        agent.Account.changeEmail({userId, token})
            .then(user => {
                userCtx.saveUser(user);
                history.push("/");
                toast.success("Your email has been updated successfuly");
            })
            .catch(e => {
                console.log(e);
                history.push("/");
                toast.error("Something went wrong");
            })
    }, []);

    return <></>

};

export default ChangeEmail;