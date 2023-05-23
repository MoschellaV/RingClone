import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import useUserData from "../../hooks/useUserData";
import DisplayVideoStream from "../../components/DisplayVideoStream";

const LiveVideo = () => {
    const { userData, isLoading } = useUserData();

    if (!isLoading) console.log("hh" + userData);

    return (
        <View style={{ flex: 1 }}>
            <DisplayVideoStream />
        </View>
    );
};

export default LiveVideo;
