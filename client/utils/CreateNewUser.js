import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

export const CreateNewUser = async (email, password, confirmedPassword) => {
    // check if the passwords match
    if (password !== confirmedPassword) {
        console.log("dont match");
        return "Passwords do not match!";
    }

    // create the user and handle error's
    // return appropriate message for each error
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        return "Success, account created!";
    } catch (error) {
        if (error.code === "auth/email-already-in-use") {
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
