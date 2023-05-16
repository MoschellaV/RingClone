import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DisplayAllLogs from "../../components/DisplayAllLogs";

const DetectionLogs = () => {
    return (
        <View style={{ flex: 1, padding: 30 }}>
            <DisplayAllLogs />
        </View>
    );
};

export default DetectionLogs;
