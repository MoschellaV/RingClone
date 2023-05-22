import React, { createContext, useState } from "react";

/*
    This context provides user data that is stored in firestore 
*/

const UserDataContext = createContext();

const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    const contextValue = {
        userData,
        setUserData,
    };

    return <UserDataContext.Provider value={contextValue}>{children}</UserDataContext.Provider>;
};

export { UserDataContext, UserDataProvider };
