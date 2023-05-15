const PORT = 6000;
const express = require("express");
const cors = require("cors");

const app = express();
const userRoutes = require("./routes/user");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// routes that interact with front end
app.use(userRoutes);

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
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
