const { auth, db } = require("../Firebase/firebase.js");

const verifyDeviceExists = async (deviceId) => {
    // function verifies device exists in the db

    const devicesCollection = db.collection("devices");

    try {
        const docSnapshot = await devicesCollection.doc(deviceId).get();
        if (docSnapshot.exists) {
            return "Device exists.";
        } else {
            return "Device Id does not exist.";
        }
    } catch (error) {
        return "Unkown Error,s could not verify device.";
    }
};

module.exports = {
    verifyDeviceExists,
};
