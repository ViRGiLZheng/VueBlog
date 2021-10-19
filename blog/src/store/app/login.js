import { loginName } from "../../api/login";
import * as types from "../mutation-type";
// import { Message } from "element-ui";

// getters
const getters = {
    userName: state => state.userName,
    pwd: state => state.pwd,
    pass:state=>state.pass,
};


// initial state
const state = {
    userName: "", // 昵称
    pwd:String,
    pass:false
};

// actions
const actions = {
    // 用户名登录
    loginName({ commit }, userInfo) {
        const userName = userInfo.userName ? userInfo.userName.trim() : "";
        const pwd = userInfo.pwd ? userInfo.pwd : "";
        return new Promise((resolve, reject) => {
            loginName(userName, pwd).then(response => {
                let data = response.data
                commit(types.LOGIN_CHECK,data.pass)
                resolve(response)
            })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
            // .then(response => {
            //     if (response.code) {
            //         Message({
            //             message: response.message,
            //             type: "error",
            //             duration: 5 * 1000
            //         });
            //     } else {
            //  let data = response.data;
            //  commit(types.LOGIN_CHECK,data.pass)
            //     }
            //     resolve(response);
            // })
            // .catch(error => {
            //     reject(error);
            // });
        });
    }
}

// mutations
const mutations = {
    [types.LOGIN_CHECK](state, pass) {
        state.pass = pass;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
