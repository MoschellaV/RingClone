import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

import { Button, Stack, Text, Modal, FormControl, Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { addNewDevice } from "../../api/serverRequests";

const UserDevices = () => {
    const { user, setUser } = useContext(UserContext);

    const [showModal, setShowModal] = useState(false);
    const [deviceName, setDeviceName] = useState("");
    const [deviceId, setDeviceId] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const closeModal = () => {
        setShowModal(false);
        setDeviceName("");
        setDeviceId("");
        setResponse("");
    };

    const addNewDevicetoUser = async () => {
        const id = {
            userId: user.uid,
            name: deviceName,
            deviceId: deviceId,
        };

        setLoading(true);

        if (deviceName && deviceId)
            addNewDevice(id)
                .then((res) => {
                    if (res.status === 200) {
                        setResponse(res.data.message);
                        setLoading(false);
                    }
                })
                .catch((error) => {
                    setLoading(false);
                    console.error(error);
                });
        else {
            setLoading(false);
            setResponse("Cannot have empty fields");
        }
    };

    return (
        <Stack space={4}>
            <Text fontSize="lg" style={{ fontWeight: "bold" }}>
                Your Devices
            </Text>
            <Button
                size="sm"
                variant="outline"
                leftIcon={<Ionicons name="add-sharp" size={20} color="black" />}
                onPress={() => setShowModal(true)}
            >
                <Text fontSize="md">Add a Rang Device</Text>
            </Button>

            {/* modal */}
            <Modal isOpen={showModal} onClose={closeModal}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />
                    <Modal.Header>Add new device</Modal.Header>
                    <Modal.Body>
                        <FormControl>
                            <FormControl.Label>Device Name</FormControl.Label>
                            <Input
                                placeholder="Front Door"
                                value={deviceName}
                                onChangeText={(value) => setDeviceName(value)}
                            />
                            <FormControl.Label>Device Id</FormControl.Label>
                            <Input value={deviceId} onChangeText={(value) => setDeviceId(value)} />
                        </FormControl>
                        {response && (
                            <Text mt={2} style={{ textAlign: "center", fontWeight: "bold" }}>
                                {response}
                            </Text>
                        )}
                    </Modal.Body>
                    <Modal.Footer justifyContent="center">
                        <Button.Group space={2}>
                            <Button variant="ghost" colorScheme="blueGray" onPress={closeModal}>
                                Cancel
                            </Button>
                            <Button isLoading={loading} isLoadingText="Add" onPress={addNewDevicetoUser}>
                                Add
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Stack>
    );
};

export default UserDevices;
