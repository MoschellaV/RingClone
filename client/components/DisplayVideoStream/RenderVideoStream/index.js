import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { Dimensions, Image } from "react-native";
import { Box, Button, Text, useToast } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SERVER_URL } from "@env";

const RenderVideoStream = ({ deviceId, deviceName }) => {
    const toast = useToast();

    const socketRef = useRef(null);
    const frameTimer = useRef(null);

    const [videoFrame, setVideoFrame] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showPlayIcon, setShowPlayIcon] = useState(true);
    const [failToConnect, setFailToConnect] = useState(false);

    const screenWidth = Dimensions.get("window").width;

    const forceDisconnect = () => {
        if (socketRef.current && socketRef.current.connected) {
            // if a connection is already established, disconnect it
            socketRef.current.disconnect();
            setShowPlayIcon(true);
            setIsConnected(false);
            setVideoFrame(null);
        }
    };

    const checkIfFrameRecieved = () => {
        /* 
        used to check if frames are being sent by the server.
        if they are not the function disconnect the client forcefully after 5 sec,
        and then updates the state failToConnect
        */

        clearTimeout(frameTimer.current); // clear the previous timer
        frameTimer.current = setTimeout(() => {
            // if no frame received within 5 seconds
            setFailToConnect(true);
            setIsLoading(false);
        }, 5000);
    };

    useEffect(() => {
        // checks failToConnect, if it is true an error message is displayed

        if (failToConnect) {
            forceDisconnect();
            toast.show({
                title: "Failed to connect!",
                placement: "top",
            });
            setFailToConnect(false);
        }
    }, [failToConnect]);

    const connectToDevice = () => {
        /*
        connects the client to the backend, handles establishing a connection, 
        connection, disconnect, and recieving video frames.
        */

        setIsLoading(true);
        setShowPlayIcon(false);

        // establish connection to server
        socketRef.current = io(`${SERVER_URL}/api/stream-video`, {
            query: { deviceId: deviceId },
        });

        // handle connection
        socketRef.current.on("connect", () => {
            setIsConnected(true);
            checkIfFrameRecieved();
        });

        // handle disconnect
        socketRef.current.on("disconnect", () => {
            setVideoFrame(null);
            setIsConnected(false);
        });

        // handle received video frames
        socketRef.current.on("videoFrame", (frameData) => {
            setIsLoading(false);
            setVideoFrame(frameData);
            checkIfFrameRecieved();
        });

        return () => {
            // clean up
            if (socketRef.current) {
                socketRef.current.disconnect();
                socketRef.current = null;
            }
        };
    };

    return (
        <Box>
            <Text fontSize="lg" mb={2} style={{ fontWeight: "bold", alignSelf: "flex-start" }}>
                {deviceName}
            </Text>

            <Button
                startIcon={showPlayIcon && <AntDesign name="play" size={50} color="white" onPress={connectToDevice} />}
                isLoading={isLoading}
                backgroundColor="black"
                borderRadius={0}
                width={screenWidth * 0.9}
                height={200}
                position="relative"
            >
                {isConnected && (
                    <Box>
                        <Image
                            source={{ uri: `data:image/jpeg;base64,${videoFrame}` }}
                            style={{ width: screenWidth * 0.86, aspectRatio: 16 / 9 }}
                            resizeMode="contain"
                            alt="streamed-video"
                        />
                        <MaterialIcons
                            name="cancel"
                            size={40}
                            color="#363636"
                            onPress={forceDisconnect}
                            style={{ position: "absolute", top: 5, right: 5 }}
                        />
                    </Box>
                )}
            </Button>
        </Box>
    );
};

export default RenderVideoStream;
