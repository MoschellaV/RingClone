import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { Button, Stack, Text, Box, Modal, VStack, HStack, Spinner } from "native-base";
import { getUserDevices } from "../../../api/serverRequests";

import LoadingSpinner from "../../LoadingSpinner";

const RenderDevices = () => {
    const { user, setUser } = useContext(UserContext);
    const [devices, setDevices] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchDevices = () => {
            const userId = {
                userId: user.uid,
            };

            setLoading(true);

            getUserDevices(userId)
                .then((res) => {
                    if (res.status === 200) {
                        setDevices(res.data.message);
                        setLoading(false);
                    }
                })
                .catch((err) => {
                    console.error(err);
                    setLoading(false);
                });
        };

        fetchDevices();
    }, []);

    const displayCorrectResponse = () => {
        if (typeof devices === "string") {
            return (
                <Box alignItems="center">
                    <Text fontSize="sm" textAlign="center">
                        Could not fetch devices, try reloading.
                    </Text>
                </Box>
            );
        } else if (Array.isArray(devices) && devices.length > 0) {
            const renderDevices = devices.map(({ deviceName, deviceId }, index) => (
                <DeviceItem key={index} deviceName={deviceName} deviceId={deviceId} />
            ));
            return <Stack space={2}>{renderDevices}</Stack>;
        } else {
            return null;
        }
    };

    return loading ? <LoadingSpinner /> : displayCorrectResponse();
};

const DeviceItem = ({ deviceName, deviceId }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <Box>
            <Button onPress={() => setShowModal(true)}>
                <Text fontSize="md">{deviceName}</Text>
            </Button>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
                <Modal.Content maxWidth="350">
                    <Modal.CloseButton />
                    <Modal.Header>
                        <Text fontSize="lg">Device Information</Text>
                    </Modal.Header>
                    <Modal.Body>
                        <VStack space={3}>
                            <Text fontSize="md">
                                Name: <Text color="blueGray.400">{deviceName} </Text>
                            </Text>
                            <Text fontSize="md">
                                Id: <Text color="blueGray.400">{deviceId} </Text>
                            </Text>
                            <Box alignItems="center" mt={1}>
                                <Text fontSize="xs" style={{ fontWeight: "bold" }}>
                                    Keep your device id safe
                                </Text>
                            </Box>
                        </VStack>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        </Box>
    );
};

export default RenderDevices;
