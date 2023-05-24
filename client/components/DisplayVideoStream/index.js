import React, { useContext } from "react";
import useUserData from "../../hooks/useUserData";
import { Stack } from "native-base";
import RenderVideoStream from "./RenderVideoStream";
import NoDevicesMessage from "../NoDevicesMessage";

const DisplayVideoStream = () => {
    const { userData, isLoading } = useUserData();

    const renderStreams = () => {
        if (userData) {
            const devices = userData.userDevices;

            return devices.length > 0 ? (
                devices.map((device) => (
                    <RenderVideoStream
                        key={device.deviceId}
                        deviceId={device.deviceId}
                        deviceName={device.deviceName}
                    />
                ))
            ) : (
                <NoDevicesMessage />
            );
        }
    };

    return (
        <Stack space={4} flex={1} mt={30} alignItems="center">
            {renderStreams()}
        </Stack>
    );
};

export default DisplayVideoStream;
