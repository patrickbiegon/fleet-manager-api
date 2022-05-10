import React from "react";
import { useState } from 'react';
import utils from "../utils/utils";

const UserContext = React.createContext({
    user: {
        id: "",
        userName: "",
        email: "",
        firstName: "",
        lastName: "",
        cnp: "",
        adress: "",
        phoneNumber: "",
        phoneNumberConfirmed: false,
        imgSrc: "",
        car: "",
        token: "",
        role: ""
    },
    saveUser: user => { },
    signOutUser: () => { }
});

export const UserContextProvider = props => {
    const getUser = () => {
        const userString = localStorage.getItem('user');
        if (userString) return JSON.parse(userString);
        return null
    }

    const [user, setUser] = useState(getUser());

    const saveUser = userObj => {
        localStorage.setItem('user', JSON.stringify(userObj));
        setUser({
            ...userObj,
            firstName: utils.Text.Capitalize(userObj.firstName),
            lastName: utils.Text.Capitalize(userObj.lastName),
            adress: utils.Text.Capitalize(userObj.adress)
        });
    }

    const signOutUser = () => {
        localStorage.removeItem('user');
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, saveUser, signOutUser }}>
            {props.children}
        </UserContext.Provider>
    )
};

export default UserContext;