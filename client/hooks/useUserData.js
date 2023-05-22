import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { UserDataContext } from "../context/UserDataContext";
import { getUserDocument } from "../api/serverRequests";

const useUserData = () => {
    const { user } = useContext(UserContext);
    const { userData, setUserData } = useContext(UserDataContext);

    const fetchUserData = async () => {
        const userId = {
            userId: user.uid,
        };

        const userData = await getUserDocument(userId);
        setUserData(userData.data);
    };

    return {
        userData,
        fetchUserData,
    };
};

export default useUserData;
