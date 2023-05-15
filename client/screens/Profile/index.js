import React, { useContext, useRef, useState } from "react";
import moment from "moment";
import { UserContext } from "../../context/UserContext";

import { Button, Stack, Text, AlertDialog, Box } from "native-base";

import { LogOutUser } from "../../utils/LogOutUser";
import { deleteUserAccount } from "../../api/serverRequests";
import { UserDevices } from "../../components";

const Profile = () => {
    const { user, setUser } = useContext(UserContext);
    const cancelRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false); // controls delete modal
    const [errorMessage, setErrorMessage] = useState("");

    const onCloseDeleteModal = () => setIsOpen(false);

    const formatDateCreated = (dateString) => {
        const date = moment(dateString);
        const formattedDate = date.format("MMMM D, YYYY z");
        return formattedDate;
    };

    const deleteAccount = async () => {
        const uid = {
            uid: user.uid,
        };

        deleteUserAccount(uid)
            .then((res) => {
                if (res.status === 200) {
                    // if account deletion was successful log out the user
                    LogOutUser();
                }
            })
            .catch((err) => {
                console.error(err);
                setErrorMessage("Error occured while deleting your account!");
            });

        onCloseDeleteModal();
    };

    return (
        <Stack space={4} w="70%" maxW="300px" mx="auto" flex={1} mt={30}>
            <Box alignItems="center">
                <Text>{user.email}</Text>
                <Text>Account Created on {formatDateCreated(user.metadata.creationTime)}</Text>
            </Box>

            {/* log out button */}
            <Button w="100%" onPress={LogOutUser}>
                <Text fontSize="md">Log Out</Text>
            </Button>

            {/* user devices section */}
            <UserDevices />

            <Text fontSize="lg" style={{ fontWeight: "bold" }}>
                Danger Zone
            </Text>
            {/* delete button */}
            <Button w="100%" colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
                <Text fontSize="md">Delete Account</Text>
            </Button>
            <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onCloseDeleteModal}>
                <AlertDialog.Content>
                    <AlertDialog.CloseButton />
                    <AlertDialog.Header>Delete Account</AlertDialog.Header>
                    <AlertDialog.Body>
                        This will remove all data related to this account. This action cannot be reversed. Deleted data
                        can not be recovered.
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                        <Button.Group space={2}>
                            <Button
                                variant="unstyled"
                                colorScheme="coolGray"
                                onPress={onCloseDeleteModal}
                                ref={cancelRef}
                            >
                                Cancel
                            </Button>
                            <Button colorScheme="danger" onPress={deleteAccount}>
                                Delete
                            </Button>
                        </Button.Group>
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>

            {/* error message if account could not be deleted */}
            {errorMessage && <Text style={{ textAlign: "center", fontWeight: "bold" }}>{errorMessage}</Text>}
        </Stack>
    );
};

export default Profile;
