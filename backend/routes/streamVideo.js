const { Server } = require("socket.io");

const handleVideoStreaming = (io) => {
    /*
        handles the video streaming namespace
    */

    const streamVideoNamespace = io.of("/api/stream-video");

    // connection event for namespace
    streamVideoNamespace.on("connection", (socket) => {
        const { deviceId } = socket.handshake.query;
        console.log(`Device ${deviceId} connected`);

        // join device-specific room via decvice unique id
        socket.join(deviceId);

        // handle incoming video frames
        socket.on("videoFrame", (frameData) => {
            // broadcast frame to other devices in the same room
            // (client, and any user with the device's id)
            socket.to(deviceId).emit("videoFrame", frameData);
        });

        socket.on("disconnect", () => {
            console.log(`Device ${deviceId} disconnected`);
        });
    });
};

module.exports = { handleVideoStreaming };
