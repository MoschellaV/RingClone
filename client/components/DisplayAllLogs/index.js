import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import { UserContext } from "../../context/UserContext";
import { ScrollView, Stack } from "native-base";
import { getAllUserLogs } from "../../api/serverRequests";
import RenderLogs from "./RenderLogs";

const DisplayAllLogs = () => {
    const { user, setUser } = useContext(UserContext);
    const [allDevicesAndLogs, setAllDevicesAndLogs] = useState(null);
    const [loading, setLoading] = useState(false);

    const sortObjectsByLatestLog = (array) => {
        return array.map((obj) => {
            const sortedLogs = obj.logs.sort((a, b) => {
                const timeA = moment(a.time, "YYYY-MM-DD HH:mm:ss");
                const timeB = moment(b.time, "YYYY-MM-DD HH:mm:ss");
                return timeB.diff(timeA);
            });
            return { ...obj, logs: sortedLogs };
        });
    };

    useEffect(() => {
        setLoading(true);

        // fetching logs
        const fetchLogs = () => {
            const userId = {
                userId: user.uid,
            };

            getAllUserLogs(userId)
                .then((res) => {
                    if (res.status === 200) {
                        const data = res.data.data;
                        const sortedLogs = sortObjectsByLatestLog(data);
                        setAllDevicesAndLogs(sortedLogs);
                        setLoading(false);
                    }
                })
                .catch((err) => {
                    console.error(err);
                    setLoading(false);
                });
        };

        // initial call
        fetchLogs();

        // fetch logs every 100 seconds, in case of new log
        // fetchInterval = num of seconds * 1000 = amt in milliseconds
        const fetchInterval = 20 * 1000;
        const intervalId = setInterval(fetchLogs, fetchInterval);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <ScrollView>
            <Stack space={4}>
                <RenderLogs allDevicesAndLogs={allDevicesAndLogs} loading={loading} />
            </Stack>
        </ScrollView>
    );
};

export default DisplayAllLogs;
