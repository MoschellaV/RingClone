const auth = require("../Firebase/firebase.js");

/*
This is a utility file that handles tasks to do with user accounts.

NOTE - Logging in and Logging out are done on the frontend
*/

const createNewUser = async (email, password) => {
    // function that creates a new user, via email and password
    try {
        await auth.createUser({
            email,
            password,
        });
        return "Success, account created!";
    } catch (error) {
        if (error.code === "auth/email-already-exists") {
            return "That email address is already in use!";
        }

        if (error.code === "auth/invalid-email") {
            return "That email address is invalid!";
        }

        if (error.code === "auth/weak-password") {
            return "Password should be at least 6 characters!";
        }

        return "Unknown error occurred.";
    }
};

const deleteUserAccount = async (uid) => {
    try {
        await auth.deleteUser(uid);
        return "Successfully deleted user";
    } catch (error) {
        return `${error.code} Error deleting user`;
    }
};

module.exports = {
    createNewUser,
    deleteUserAccount,
};
