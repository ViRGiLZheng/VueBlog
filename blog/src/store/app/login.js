import { userInfo, loginName, logout } from "../../api/auth/login";
import * as types from "../mutation-types";
import { Message } from "element-ui";

// getters
const getters = {
    userName: state => state.userName,
    pwd: state => state.pwd,
    routers: state => state.routers
};


// actions
const actions = {
    // 用户名登录
    loginName({ commit }, userInfo) {
        const userName = userInfo.userName ? userInfo.userName.trim() : "";
        const pwd = userInfo.pwd ? userInfo.pwd : "";
        return new Promise((resolve, reject) => {
            loginName(userName, pwd)
                .then(response => {
                    if (response.code) {
                        Message({
                            message: response.message,
                            type: "error",
                            duration: 5 * 1000
                        });
                    } else {
                        let data = response.data;
                    }
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}