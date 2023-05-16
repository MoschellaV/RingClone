import React from "react";
import { Stack, Text, Box, Flex, HStack, Spinner } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import LoadingSpinner from "../../LoadingSpinner";

const RenderLogs = ({ allDevicesAndLogs, loading }) => {
    const displayLogs = () => {
        if (Array.isArray(allDevicesAndLogs)) {
            const renderAllLogs = allDevicesAndLogs.map((device, index) => (
                <Box key={index}>
                    <Text fontSize="lg" mb={1} style={{ fontWeight: "bold" }}>
                        {device.deviceName}
                    </Text>
                    <Stack space={2} mb={5}>
                        {device.logs.map((log, logIndex) => (
                            <Box
                                key={logIndex}
                                backgroundColor="muted.50"
                                borderColor="muted.900"
                                borderWidth={1.5}
                                borderRadius={10}
                                pl={3}
                                pt={0.5}
                                pb={0.5}
                                pr={3}
                            >
                                <Flex
                                    direction="row"
                                    mb="2.5"
                                    mt="1.5"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Flex direction="row" alignItems="center">
                                        <AntDesign
                                            name="exclamationcircleo"
                                            size={24}
                                            color="black"
                                            style={{ paddingRight: 5 }}
                                        />
                                        <Text fontSize="md">{log.log}</Text>
                                    </Flex>

                                    <Text fontSize="sm" color="muted.600">
                                        {log.time}
                                    </Text>
                                </Flex>
                            </Box>
                        ))}
                    </Stack>
                </Box>
            ));

            return renderAllLogs;
        } else {
            return (
                <Box alignItems="center">
                    <Text fontSize="md">Could not fetch logs, try reloading</Text>
                </Box>
            );
        }
    };

    return loading ? <LoadingSpinner /> : displayLogs();
};

export default RenderLogs;
