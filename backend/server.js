const PORT = 6000;
const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIO = require("socket.io");
const { handleVideoStreaming } = require("./routes/streamVideo");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const userRoutes = require("./routes/user");
const deviceRoutes = require("./routes/device");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// handle video streaming from device to client
handleVideoStreaming(io);

// routes that interact with front end
app.use(userRoutes);

// routes that interact the the device/camera appliance
app.use(deviceRoutes);

app.get("/", (req, res) => {
    res.send("Hello!");
});

// recieveing camera detection
app.post("/post", (req, res) => {
    res.sendStatus(200);
    let { status, time } = req.body;
    console.log(`status: ${status}`);
    console.log(`time: ${time}`);
});

// server listening
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
