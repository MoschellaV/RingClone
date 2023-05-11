import React, { useState } from "react";
import { Input, Stack, Pressable, Icon, Text, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const SignUp = ({ setShowLogInScreen }) => {
    const [value, setValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <Stack space={4} w="70%" maxW="400px" mx="auto" flex={1} alignItems="center" justifyContent="center">
            <Text fontSize="4xl">Hey!</Text>
            <Text fontSize="2xl" style={{ textAlign: "center" }}>
                Create an account here
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
            />

            <Button w="100%" isLoading={false} isLoadingText="Creating your account" variant="outline">
                <Text fontSize="md">Sign Up</Text>
            </Button>

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
