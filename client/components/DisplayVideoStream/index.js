import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Stack, Text } from "native-base";
import { Dimensions, View, Image } from "react-native";
import { io } from "socket.io-client";

const DisplayVideoStream = () => {
    const [videoFrame, setVideoFrame] = useState(null);
    const socketRef = useRef(null);
    const screenWidth = Dimensions.get("window").width;
    const [isTouched, setIsTouched] = useState(false);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        // Establish the WebSocket connection to the server
        socketRef.current = io("http://localhost:6000/api/stream-video", {
            query: { deviceId: "WiR44koXzR4GdsEulyf1" },
        });

        // Handle received video frames
        socketRef.current.on("videoFrame", (frameData) => {
            // Process and display the received video frame
            setVideoFrame(frameData);
        });

        return () => {
            // Clean up the WebSocket connection
            if (socketRef.current) {
                socketRef.current.disconnect();
                socketRef.current = null;
            }
        };
    }, []);

    // const connectToDevice = () => {
    //     console.log("Connecting");
    //     setIsTouched(true);
    //     // Establish the WebSocket connection to the server
    //     socketRef.current = io("http://localhost:6000/api/stream-video", {
    //         query: { deviceId: "WiR44koXzR4GdsEulyf1" },
    //     });

    //     // Handle connection event
    //     socketRef.current.on("connect", () => {
    //         setIsConnected(true);
    //     });

    //     // Handle disconnect event
    //     socketRef.current.on("disconnect", () => {
    //         setIsConnected(false);
    //     });

    //     // Handle received video frames
    //     socketRef.current.on("videoFrame", (frameData) => {
    //         // Process and display the received video frame
    //         setVideoFrame(frameData);
    //     });

    //     return () => {
    //         // Clean up the WebSocket connection
    //         if (socketRef.current) {
    //             socketRef.current.disconnect();
    //             socketRef.current = null;
    //         }
    //     };
    // };

    return (
        <Stack space={4} flex={1} mt={50} alignItems="center">
            <Text fontSize="lg" ml={screenWidth * 0.075} style={{ fontWeight: "bold", alignSelf: "flex-start" }}>
                Front Door
            </Text>
            <Button
                backgroundColor="black"
                opacity={isTouched ? 0 : 1}
                width={screenWidth * 0.9}
                height={200}
                // onPress={connectToDevice}
            >
                <Image
                    source={{ uri: `data:image/jpeg;base64,${videoFrame}` }}
                    style={{ width: "100%", aspectRatio: 1 }}
                    resizeMode="contain"
                    alt="streamed-video"
                />
            </Button>
        </Stack>
    );
};

export default DisplayVideoStream;
