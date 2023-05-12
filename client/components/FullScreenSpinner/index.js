import { Stack, Spinner } from "native-base";
import React from "react";

const FullScreenSpinner = () => {
    return (
        <Stack space={4} w="70%" maxW="400px" mx="auto" flex={1} alignItems="center" justifyContent="center">
            <Spinner size="lg" />
        </Stack>
    );
};

export default FullScreenSpinner;
