import axios from "axios";

export const createNewUser = (userInfo) => {
    return axios({
        method: "POST",
        url: "http://localhost:6000/api/user/create-user-account",
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
        url: "http://localhost:6000/api/user/delete-user-account",
        data: uid,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
};
