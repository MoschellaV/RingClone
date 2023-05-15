import React, { createContext, useState } from "react";

/*
This context provies user data from firebase's auth storage
*/

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const contextValue = {
        user,
        setUser,
    };

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
