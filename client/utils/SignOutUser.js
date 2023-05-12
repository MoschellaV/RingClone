import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

export const SignOutUser = () => {
    signOut(auth)
        .then(() => {
            // success
            console.log("signed out");
        })
        .catch((error) => {
            console.error(error);
        });
};
