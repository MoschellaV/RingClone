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
    const userId = req.body.userId;
    const deviceName = req.body.name;
    const deviceId = req.body.deviceId;

    // verify the device exists by checking db
    try {
        const deviceExistStatus = await dbDevice.verifyDeviceExists(deviceId);

        // send error message back to client
        if (deviceExistStatus !== "Device exists.") {
            res.json({ message: deviceExistStatus });
        } else {
            const addDeviceStatus = await dbUser.addDeviceToUser(userId, deviceName, deviceId);
            res.json({ message: addDeviceStatus });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error occurred while verifying device." });
    }
});

router.post("/api/user/get-user-devices", async (req, res) => {
    const userId = req.body.userId;

    try {
        // fetching user devices
        const response = await dbUser.fetchUserDevices(userId);

        // error handling
        if (response === "No document found.") {
            res.json({ message: "No document found." });
        } else if (response === "Unable to fetch document.") {
            console.error("Unable to fetch document.");
            res.json({ message: "Unable to fetch document." });
        } else {
            res.json({ message: response });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error occurred while retriving user document." });
    }
});

router.post("/api/user/get-user-document", async (req, res) => {
    const userId = req.body.userId;

    try {
        // fetching user devices
        const response = await dbUser.fetchUserDocument(userId);

        // error handling
        if (response === "No document found.") {
            res.json({ message: "No document found." });
        } else if (response === "Unable to fetch document.") {
            console.error("Unable to fetch document.");
            res.json({ message: "Unable to fetch document." });
        } else {
            res.json({ message: response });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error occurred while retriving user document." });
    }
});

router.post("/api/user/get-all-user-logs", async (req, res) => {
    const userId = req.body.userId;

    try {
        // fetching user devices
        const response = await dbUser.fetchUserDevices(userId);

        // error handling
        if (typeof response === "string") {
            console.error(response);
            res.json({ message: response });
        } else {
            // if the user  has devices...
            // promise fetches each device and it's logs
            const deviceLogPromises = response.map(async (device) => {
                const logs = await dbDevice.fetchDeviceLogs(device.deviceId);
                return {
                    deviceId: device.deviceId,
                    deviceName: device.deviceName,
                    logs: logs,
                };
            });

            // wait for all promises to resolve
            const deviceLogs = await Promise.all(deviceLogPromises);

            res.json({ message: "Success", data: deviceLogs });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error occurred while retriving user document." });
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
