import React, { useEffect, useState } from "react";
import { Input, Stack, Pressable, Icon, Text, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { createNewUser } from "../../api/serverRequests";

const SignUp = ({ setShowLogInScreen }) => {
    // hidden password states
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // value's for input boxes
    const [emailValue, setEmailValue] = useState(""); // email
    const [passwordValue, setPasswordValue] = useState(""); // password
    const [confirmedPasswordValue, setConfirmedPasswordValue] = useState(""); // confirmed password

    // loading
    const [loading, setLoading] = useState(false);

    // response of creating new user
    const [submissionResponse, setSubmissionResponse] = useState("");

    const userInfoSubmitSignUp = async () => {
        setLoading(true); // start loading

        // check if the passwords match
        if (passwordValue !== confirmedPasswordValue) {
            setSubmissionResponse("Passwords do not match!");
        }

        // create user data object to pass to backend
        const userInfo = {
            email: emailValue,
            password: passwordValue,
        };

        // pass data to backend
        createNewUser(userInfo)
            .then((res) => {
                if (res.status === 200) {
                    setSubmissionResponse(res.data.message);
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.error(err);
                setSubmissionResponse("Unkown error occured.");
                setLoading(false);
            });
    };

    return (
        <Stack space={4} w="70%" maxW="400px" mx="auto" flex={1} alignItems="center" justifyContent="center">
            <Text fontSize="4xl">Hey!</Text>
            <Text fontSize="2xl" style={{ textAlign: "center" }}>
                Create an account here
            </Text>

            {/* email field */}
            <Input
                size="xl"
                placeholder="Email Address"
                value={emailValue}
                onChangeText={(text) => setEmailValue(text)}
            />

            {/* password field */}
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

            {/* confirm password field */}
            <Input
                size="xl"
                type={showConfirmPassword ? "text" : "password"}
                InputRightElement={
                    <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                        <Icon
                            as={<MaterialIcons name={showConfirmPassword ? "visibility" : "visibility-off"} />}
                            size={6}
                            mr="2"
                            color="muted.400"
                        />
                    </Pressable>
                }
                placeholder="Confirm Password"
                value={confirmedPasswordValue}
                onChangeText={(text) => setConfirmedPasswordValue(text)}
            />

            {/* submit button */}
            <Button
                w="100%"
                isLoading={loading}
                isLoadingText="Creating your account"
                variant="outline"
                onPress={userInfoSubmitSignUp}
            >
                <Text fontSize="md">Sign Up</Text>
            </Button>

            {/* submission response appears after user creates account */}
            {submissionResponse && <Text fontSize="sm">{submissionResponse}</Text>}

            <Text fontSize="sm" style={{ marginTop: 30 }}>
                Back to{" "}
                <Text style={{ textDecorationLine: "underline" }} onPress={() => setShowLogInScreen(true)}>
                    Log In
                </Text>
            </Text>
        </Stack>
    );
};

export default SignUp;
