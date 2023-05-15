const express = require("express");
const router = express.Router();
const user = require("../utils/userAccounts");
const dbUser = require("../utils/dbUserOperations");
const dbDevice = require("../utils/dbDeviceOperations");

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
            await dbUser.createUserDocumnet(userData);
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

router.post("/api/user/add-device", async (req, res) => {
    const deviceName = req.body.name;
    const deviceId = req.body.id;

    console.log(deviceName);

    console.log(deviceId);

    // verify the device exists by checking db
    try {
        const deviceExistStatus = await dbDevice.verifyDeviceExists(deviceId);

        // send error message back to client
        if (deviceExistStatus !== "Device exists.") {
            res.json({ message: deviceExistStatus });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error occurred while verifying device." });
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
