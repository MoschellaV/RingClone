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
    let { status } = req.body;
    console.log(status);
});

// server listening
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
