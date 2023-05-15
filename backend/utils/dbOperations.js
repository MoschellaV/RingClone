const { auth, db } = require("../Firebase/firebase.js");

const createUserDocumnet = async (userData) => {
    // creates a document for a user
    // this is done on account creation

    // create data object
    const data = {
        uid: userData.uid,
        email: userData.email,
        creationTime: userData.metadata.creationTime,
        ringDevices: [],
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

module.exports = {
    createUserDocumnet,
};
