import React, { useContext } from "react";
import moment from "moment";
import { UserContext } from "../../context/UserContext";

import { Button, Stack, Text } from "native-base";
import { SignOutUser } from "../../utils/SignOutUser";

const Profile = () => {
    const { user, setUser } = useContext(UserContext);
    console.log(user);

    const formatDateCreated = (timestamp) => {
        const date = moment(timestamp);
        return date.format("MMMM D, YYYY");
    };

    return (
        <Stack space={4} w="70%" maxW="400px" mx="auto" flex={1} alignItems="center" mt={30}>
            <Text>{user.email}</Text>
            <Text>Account Created on {formatDateCreated(user.createdAt)}</Text>
            <Button w="100%" onPress={SignOutUser}>
                <Text fontSize="md">Log Out</Text>
            </Button>
        </Stack>
    );
};

export default Profile;
