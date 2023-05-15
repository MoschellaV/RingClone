import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

export const LogOutUser = () => {
    signOut(auth)
        .then(() => {
            // success
            console.log("signed out");
        })
        .catch((error) => {
            console.error(error);
        });
};
