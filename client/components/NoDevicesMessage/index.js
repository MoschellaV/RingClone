import React from "react";
import { Stack, Text } from "native-base";

const NoDevicesMessage = () => {
    return (
        <Stack space={4} w="70%" maxW="400px" mx="auto" flex={1}>
            <Text fontSize="md" textAlign="center">
                You don't have any devices. Please connect a Rang device.
            </Text>
        </Stack>
    );
};

export default NoDevicesMessage;
