const PORT = 5051;
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello!");
});

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
