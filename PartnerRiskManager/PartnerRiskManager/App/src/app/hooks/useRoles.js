const { useContext } = require("react");
const { default: UserContext } = require("../context/user-context");

const useRoles = () => {
    return useContext(UserContext).user.role;
}

export default useRoles;