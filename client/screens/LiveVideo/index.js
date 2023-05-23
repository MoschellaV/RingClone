import React, { useEffect } from "react";
import { View } from "react-native";
import DisplayVideoStream from "../../components/DisplayVideoStream";
import { ScrollView } from "native-base";

const LiveVideo = () => {
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <DisplayVideoStream />
            </View>
        </ScrollView>
    );
};

export default LiveVideo;
