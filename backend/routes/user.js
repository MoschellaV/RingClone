const express = require("express");
const router = express.Router();
const user = require("../utils/userAccounts");

router.post("/api/user/create-user-account", async (req, res) => {
    const userInfo = req.body;
    const email = userInfo.email;
    const password = userInfo.password;

    try {
        const response = await user.CreateNewUser(email, password);
        res.json({ message: response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error occurred while creating account." });
    }
});

module.exports = router;
