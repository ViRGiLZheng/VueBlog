import axios from "../util/axios";

export function loginName(userName, pwd) {
    return axios({
        url: "/loginCheck",
        method: "post",
        data:{ userName, pwd }
    });
}

export function getSiderMap(){
    return axios({
        url:'/getSiderMap',
        method:"post",
        data:{}
    })
}