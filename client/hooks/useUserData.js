import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { UserDataContext } from "../context/UserDataContext";
import { getUserDocument } from "../api/serverRequests";

const useUserData = () => {
    const { user } = useContext(UserContext);
    const { userData, setUserData } = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            setIsLoading(true);
            const userId = {
                userId: user.uid,
            };
            try {
                const userData = await getUserDocument(userId);
                setUserData(userData.data.message);
            } catch (error) {
                // handle error
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, [user, setUserData]);

    return {
        userData,
        isLoading,
    };
};

export default useUserData;
