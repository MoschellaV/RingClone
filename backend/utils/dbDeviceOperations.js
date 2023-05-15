const { admin, auth, db } = require("../Firebase/firebase.js");

const verifyDeviceExists = async (deviceId) => {
    /* 
    function verifies device exists in the db
    */

    const devicesCollection = db.collection("devices");

    try {
        const docSnapshot = await devicesCollection.doc(deviceId).get();
        if (docSnapshot.exists) {
            return "Device exists.";
        } else {
            return "Device Id does not exist.";
        }
    } catch (error) {
        return "Unkown Error, could not verify device.";
    }
};

const addDeviceLog = async (deviceId, logInfo) => {
    /* 
    function adds device detection logs to the device collection in db
    */

    const docRef = db.collection("devices").doc(deviceId);

    const newLog = {
        log: logInfo.status,
        deviceId: deviceId,
        time: logInfo.time,
    };
    try {
        await docRef.collection("logs").add(newLog);
        return "Successfully added log";
    } catch (error) {
        return "Error adding log";
    }
};

module.exports = {
    verifyDeviceExists,
    addDeviceLog,
};
