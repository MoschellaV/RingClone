const express = require("express");
const router = express.Router();
const user = require("../utils/userAccounts");
const dbUser = require("../utils/dbUserOperations");
const dbDevice = require("../utils/dbDeviceOperations");

router.post(`/api/device/add-log/:deviceId`, async (req, res) => {
    const deviceId = req.params.deviceId;

    const logInfo = req.body;
    // example of how log info looks...
    /*
    {
        status: 'FACE DETECTED',
        time: '2023-05-15 15:30:45'
    }
    */

    try {
        const deviceVerificationStatus = await dbDevice.verifyDeviceExists(deviceId);

        // checking if device exists before adding log
        if (deviceVerificationStatus !== "Device exists.") {
            res.json({ message: "Cannot add log device does not exist." });
        } else {
            // add log
            const response = await dbDevice.addDeviceLog(deviceId, logInfo);
            res.json({ message: response });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error occurred while adding log." });
    }
});

module.exports = router;
