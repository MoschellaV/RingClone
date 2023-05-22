import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import useUserData from "../../hooks/useUserData";

const LiveVideo = () => {
    const { userData, fetchUserData } = useUserData();

    useEffect(() => {
        fetchUserData();
    }, []);

    console.log(userData);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Live Video!</Text>
        </View>
    );
};

export default LiveVideo;
