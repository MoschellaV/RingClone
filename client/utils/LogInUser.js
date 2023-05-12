import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

export const LogInUser = async (email, password) => {
    // log in the user and handle error's
    // return appropriate message for each error
    try {
        await signInWithEmailAndPassword(auth, email, password);
        return "success";
    } catch (error) {
        if (error.code === "auth/user-not-found") {
            return "No user found with this email";
        }

        if (error.code === "auth/wrong-password") {
            return "Wrong password";
        }

        if (error.code === "auth/invalid-email") {
            return "That email address is invalid";
        }

        return "Unknown error occurred.";
    }
};
