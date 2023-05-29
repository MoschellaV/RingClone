import axios from "axios";
import { SERVER_URL } from "@env";

export const createNewUser = (userInfo) => {
    return axios({
        method: "POST",
        url: `${SERVER_URL}/api/user/create-user-account`,
        data: userInfo,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
};

export const deleteUserAccount = (uid) => {
    return axios({
        method: "POST",
        url: `${SERVER_URL}/api/user/delete-user-account`,
        data: uid,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
};

export const addNewDevice = (deviceId) => {
    return axios({
        method: "POST",
        url: `${SERVER_URL}/api/user/add-device`,
        data: deviceId,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
};

export const getUserDocument = (userId) => {
    return axios({
        method: "POST",
        url: `${SERVER_URL}/api/user/get-user-document`,
        data: userId,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
};

export const getUserDevices = (userId) => {
    return axios({
        method: "POST",
        url: `${SERVER_URL}/api/user/get-user-devices`,
        data: userId,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
};

export const getAllUserLogs = (userId) => {
    return axios({
        method: "POST",
        url: `${SERVER_URL}/api/user/get-all-user-logs`,
        data: userId,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
};
