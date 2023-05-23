import { Stack, Text } from "native-base";
import React from "react";

const FullScreenError = () => {
    return (
        <Stack space={4} w="70%" maxW="400px" mx="auto" flex={1} alignItems="center" justifyContent="center">
            <Text fontSize="md" textAlign="center">
                Error loading data. Restart app or find better connection.
            </Text>
        </Stack>
    );
};

export default FullScreenError;
