const auth = require("../firebase/firebase.js");

const CreateNewUser = async (email, password) => {
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

module.exports = {
    CreateNewUser,
};
