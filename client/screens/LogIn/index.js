import React, { useState } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Input, Stack, Pressable, Icon, Text, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const LogIn = ({ setShowLogInScreen }) => {
    const [value, setValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <Stack space={4} w="70%" maxW="400px" mx="auto" flex={1} alignItems="center" justifyContent="center">
            <Text fontSize="2xl" style={{ textAlign: "center" }}>
                Welcome to Rang
            </Text>

            <Input size="xl" placeholder="Email Address" />

            <Input
                size="xl"
                type={showPassword ? "text" : "password"}
                InputRightElement={
                    <Pressable onPress={() => setShowPassword(!showPassword)}>
                        <Icon
                            as={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} />}
                            size={6}
                            mr="2"
                            color="muted.400"
                        />
                    </Pressable>
                }
                placeholder="Password"
            />

            <Button w="100%" isLoading={false} isLoadingText="Creating your account" variant="outline">
                <Text fontSize="md">Log In</Text>
            </Button>

            <Text fontSize="sm" style={{ marginTop: 30 }}>
                Need an account,{" "}
                <Text
                    style={{ textDecorationLine: "underline" }}
                    onPress={() => {
                        setShowLogInScreen(false);
                    }}
                >
                    Sign Up
                </Text>
            </Text>
        </Stack>
    );
};

export default LogIn;
