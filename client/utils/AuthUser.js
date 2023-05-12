import React, { useState, useEffect, useContext } from "react";

// import firebase from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

// auth user handling
import { IncomingUser } from "../screens";

// Navbar to render pages for verified user
import Navbar from "../components/Navbar";
import FullScreenSpinner from "../components/FullScreenSpinner";

// pages
import LiveVideo from "../screens/LiveVideo";
import DetectionLogs from "../screens/DetectionLogs";
import Profile from "../screens/Profile";

// user context ~ must set user data in context for ease of access
import { UserContext } from "../context/UserContext";

// auth verification
// ~ what a user will see if they are not authenticated
const UnVerifiedUserScreen = () => {
    return <IncomingUser />;
};

// ~ what a user will see if they are authenticated
const VerifiedUserScreen = () => {
    return <Navbar liveVideo={LiveVideo} detectionLogs={DetectionLogs} profile={Profile} />;
};

const AuthUser = () => {
    const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(true);

            if (user) {
                // User is signed in
                const uid = user.uid;
                setUser(user);
                setLoading(false);
            } else {
                // User is signed out
                setUser(null);
                setLoading(false);
            }
        });

        // clean up
        return () => unsubscribe();
    }, []);

    if (loading) {
        return <FullScreenSpinner />;
    }

    return user ? <VerifiedUserScreen /> : <UnVerifiedUserScreen />;
};

export default AuthUser;
