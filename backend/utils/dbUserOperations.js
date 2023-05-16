const { admin, auth, db } = require("../Firebase/firebase.js");
const { addDeviceLog } = require("./dbDeviceOperations.js");

const createUserDocumnet = async (userData) => {
    /* 
    creates a document for a user
    this is done on account creation
    */

    // create data object
    const data = {
        uid: userData.uid,
        email: userData.email,
        creationTime: userData.metadata.creationTime,
        userDevices: [],
    };

    // get referance to the doc
    const docRef = db.collection("users").doc(userData.uid);

    // store the data in the doc and return appropriate response
    try {
        await docRef.set(data);
    } catch (error) {
        console.error("Error writing document: ", error);
    }
};

const addDeviceToUser = async (userId, deviceName, deviceId) => {
    /* 
    adds a device to the user, if to has not already been added
    */

    // get referance to the doc
    const docRef = db.collection("users").doc(userId);

    try {
        // get the doc
        const doc = await docRef.get();

        // checking if it exists
        if (!doc.exists) {
            console.log("No such document to add device to user");
        } else {
            // get the data from the doc to check if the deviceId has already been used
            // users cannot add the same device twice
            const userData = doc.data();
            const userDevices = userData.userDevices || [];
            const deviceExists = userDevices.some((device) => device.deviceId === deviceId);

            // if the device does not exist we can proceed to add it
            if (!deviceExists) {
                const newDevice = {
                    deviceName: deviceName,
                    deviceId: deviceId,
                };

                // add device to userDevices array
                await docRef.update({
                    userDevices: admin.firestore.FieldValue.arrayUnion(newDevice),
                });

                return "Device added successfully.";
            } else {
                return "Device has already been added.";
            }
        }
    } catch (error) {
        console.error("Error adding device to user: ", error);
        return "Could not add this device.";
    }
};

const fetchUserDevices = async (userId) => {
    /*
    Uses the user id to fetch the array that contains all user devices
    */

    const docRef = db.collection("users").doc(userId);

    try {
        const document = await docRef.get();
        if (document.exists) {
            return document.get("userDevices");
        } else {
            return "No document found.";
        }
    } catch (error) {
        console.error("Error fetching document: ", error);
        return "Unable to fetch document.";
    }
};

const fetchUserDocument = async (userId) => {
    /*
    Uses the user id to fetch the user document in the db
    */

    const docRef = db.collection("users").doc(userId);

    try {
        const document = await docRef.get();
        if (document.exists) {
            return document.data();
        } else {
            return "No document found.";
        }
    } catch (error) {
        console.error("Error fetching document: ", error);
        return "Unable to fetch document.";
    }
};

module.exports = {
    createUserDocumnet,
    addDeviceToUser,
    fetchUserDevices,
    fetchUserDocument,
};
