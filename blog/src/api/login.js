import axios from "../util/axios";

export function loginName(userName, pwd) {
    return axios({
        url: "/loginCheck",
        method: "post",
        data:{ userName, pwd }
    });
}
