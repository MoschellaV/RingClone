import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Stack } from "native-base";
import { getAllUserLogs } from "../../api/serverRequests";
import RenderLogs from "./RenderLogs";

const DisplayAllLogs = () => {
    const { user, setUser } = useContext(UserContext);
    const [allDevicesAndLogs, setAllDevicesAndLogs] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchLogs = () => {
            const userId = {
                userId: user.uid,
            };

            setLoading(true);

            getAllUserLogs(userId)
                .then((res) => {
                    if (res.status === 200) {
                        setAllDevicesAndLogs(res.data.data);
                        setLoading(false);
                    }
                })
                .catch((err) => {
                    console.error(err);
                    setLoading(false);
                });
        };

        fetchLogs();
    }, []);

    return (
        <Stack space={4} flex={loading && 1} justifyContent={loading && "center"}>
            <RenderLogs allDevicesAndLogs={allDevicesAndLogs} loading={loading} />
        </Stack>
    );
};

export default DisplayAllLogs;
