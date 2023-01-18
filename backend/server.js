const PORT = 5051;
const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello!");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
