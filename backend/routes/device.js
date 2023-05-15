const express = require("express");
const router = express.Router();
const user = require("../utils/userAccounts");
const dbUser = require("../utils/dbUserOperations");
const dbDevice = require("../utils/dbDeviceOperations");

router.post(`/api/device/add-log/:deviceId`, async (req, res) => {
    const deviceId = req.params.deviceId;
    const logInfo = req.body;
    console.log(deviceId);
    console.log(logInfo);

    try {
        const response = await dbDevice.addDeviceLog(deviceId, logInfo);
        res.json({ message: response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error occurred while adding log." });
    }
});

module.exports = router;
