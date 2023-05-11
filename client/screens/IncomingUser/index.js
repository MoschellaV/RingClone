import React, { useState } from "react";
import LogIn from "../LogIn";
import SignUp from "../SignUp";

const IncomingUser = () => {
    const [showLogInScreen, setShowLogInScreen] = useState(true);

    return showLogInScreen ? (
        <LogIn setShowLogInScreen={setShowLogInScreen} />
    ) : (
        <SignUp setShowLogInScreen={setShowLogInScreen} />
    );
};

export default IncomingUser;
