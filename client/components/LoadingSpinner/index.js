import React from "react";
import { HStack, Spinner } from "native-base";

const LoadingSpinner = () => {
    return (
        <HStack space={2} justifyContent="center">
            <Spinner accessibilityLabel="Loading" />
        </HStack>
    );
};

export default LoadingSpinner;
