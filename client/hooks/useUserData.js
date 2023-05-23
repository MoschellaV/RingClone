import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { UserDataContext } from "../context/UserDataContext";
import { getUserDocument } from "../api/serverRequests";

const useUserData = () => {
    const { user } = useContext(UserContext);
    const { userData, setUserData } = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(false);
    const [failToLoadData, setFailToLoadData] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            setIsLoading(true);
            const userId = {
                userId: user.uid,
            };
            try {
                const userData = await getUserDocument(userId);
                if (userData.data.status === 200) {
                    setUserData(userData.data.message);
                    setFailToLoadData(false);
                } else {
                    setFailToLoadData(true);
                    console.error(`Failed to Load User Data`);
                }
            } catch (err) {
                setFailToLoadData(true);
                console.error(`Failed to Load User Data: ${err}`);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, [user, setUserData]);

    return {
        userData,
        isLoading,
        failToLoadData,
    };
};

export default useUserData;
