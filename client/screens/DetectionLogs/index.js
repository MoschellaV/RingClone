import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DisplayAllLogs from "../../components/DisplayAllLogs";
import { ScrollView } from "native-base";

const DetectionLogs = () => {
    return (
        <ScrollView>
            <View style={{ flex: 1, padding: 30 }}>
                <DisplayAllLogs />
            </View>
        </ScrollView>
    );
};

export default DetectionLogs;
