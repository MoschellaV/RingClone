import React, { useState, useEffect, useContext } from "react";

// import firebase from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

// auth user handling
import { IncomingUser } from "../screens";

// Navbar to render pages for verified user
import { Navbar, FullScreenSpinner, FullScreenError } from "../components";

// pages
import LiveVideo from "../screens/LiveVideo";
import DetectionLogs from "../screens/DetectionLogs";
import Profile from "../screens/Profile";

// contexts
import { UserContext } from "../context/UserContext"; // to set user auth data in context
import useUserData from "../hooks/useUserData"; // to set user data (document data in firestore) in context

// auth verification
// ~ what a user will see if they are not authenticated
const UnVerifiedUserScreen = () => {
    return <IncomingUser />;
};

// ~ what a user will see if they are authenticated
const VerifiedUserScreen = () => {
    const { userData, isLoading, failToLoadData } = useUserData();

    // wait for userData to get stored in context before loading app
    return isLoading ? (
        <FullScreenSpinner />
    ) : failToLoadData ? (
        <FullScreenError />
    ) : (
        <Navbar liveVideo={LiveVideo} detectionLogs={DetectionLogs} profile={Profile} />
    );
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
