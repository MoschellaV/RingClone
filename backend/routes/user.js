const express = require("express");
const router = express.Router();
const user = require("../utils/userAccounts");
const db = require("../utils/dbOperations");

router.post("/api/user/create-user-account", async (req, res) => {
    const userInfo = req.body;
    const email = userInfo.email;
    const password = userInfo.password;

    try {
        // create account
        const response = await user.createNewUser(email, password);

        // if the account has been created...
        if (response === "Success, account created!") {
            // fetch the user's Data
            const userData = await user.fetchUserDataByEmail(email);

            // create a document in the DB for the user
            await db.createUserDocumnet(userData);
        }

        res.json({ message: response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error occurred while creating account." });
    }
});

router.post("/api/user/delete-user-account", async (req, res) => {
    const uid = req.body.uid;

    try {
        const response = await user.deleteUserAccount(uid);
        res.json({ message: response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error occurred while deleting account." });
    }
});

// router.get("/api/user/get-user-account-by-email", async (req, res) => {
//     try {
//         // fetch the user's data
//         const userData = await user.fetchUserDataByEmail(email);

//         res.json({ message: userData });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Error occurred while creating account." });
//     }
// });

module.exports = router;
