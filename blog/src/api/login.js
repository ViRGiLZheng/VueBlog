import axios from "../util/axios";

export function loginName(userName, pwd) {
    return axios({
        url: "/loginCheck",
        method: "post",
        data:{ userName, pwd }
    });
}

export function logout(uid, token) {
    return axios({
        url: "/admin/auth/login/out",
        method: "post",
        data: { uid, token }
    });
}

export function password(data) {
    return axios({
        url: "/admin/auth/login/password",
        method: "post",
        data: data
    });
}
