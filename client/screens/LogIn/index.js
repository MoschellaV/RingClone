import React, { useState } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Input, Stack, Pressable, Icon, Text, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { LogInUser } from "../../utils/LogInUser";

const LogIn = ({ setShowLogInScreen }) => {
    const [showPassword, setShowPassword] = useState(false);

    // value's for input boxes
    const [emailValue, setEmailValue] = useState(""); // email
    const [passwordValue, setPasswordValue] = useState(""); // password

    // loading
    const [loading, setLoading] = useState(false);

    // response of logging in user
    const [submissionResponse, setSubmissionResponse] = useState("");

    const userInfoSumbitLogIn = async () => {
        setLoading(true);

        const response = await LogInUser(emailValue, passwordValue);

        if (response) setLoading(false);

        // store response given by function
        setSubmissionResponse(response);
    };

    return (
        <Stack space={4} w="70%" maxW="400px" mx="auto" flex={1} alignItems="center" justifyContent="center">
            <Text fontSize="2xl" style={{ textAlign: "center" }}>
                Welcome to Rang
            </Text>

            <Input
                size="xl"
                placeholder="Email Address"
                value={emailValue}
                onChangeText={(text) => setEmailValue(text)}
            />

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
                value={passwordValue}
                onChangeText={(text) => setPasswordValue(text)}
            />

            <Button
                w="100%"
                isLoading={loading}
                isLoadingText="Creating your account"
                variant="outline"
                onPress={() => userInfoSumbitLogIn()}
            >
                <Text fontSize="md">Log In</Text>
            </Button>

            {/* submission response appears after user logs in  */}
            {submissionResponse && <Text fontSize="sm">{submissionResponse}</Text>}

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
