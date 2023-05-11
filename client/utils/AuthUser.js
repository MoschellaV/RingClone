import React, { useState, useEffect } from "react";
// import firebase from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// auth user
import { IncomingUser } from "../screens";

// Navbar to render pages for verified user
import Navbar from "../components/Navbar";
// pages
import LiveVideo from "../screens/LiveVideo";
import DetectionLogs from "../screens/DetectionLogs";
import Profile from "../screens/Profile";

// auth verification
// ~ what a user will see if they are not authenticated
const UnVerifiedUserScreen = () => {
    return <IncomingUser />;
};

const VerifiedUserScreen = () => {
    return <Navbar liveVideo={LiveVideo} detectionLogs={DetectionLogs} profile={Profile} />;
};

const AuthUser = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const uid = user.uid;
                // ...
            } else {
                // User is signed out
                // ...
            }
        });

        // Clean up the subscription on unmount
        return () => unsubscribe();
    }, []);

    // if (loading) {
    //     return null; // or a loading spinner
    // }

    return user ? <VerifiedUserScreen /> : <UnVerifiedUserScreen />;
};

export default AuthUser;
