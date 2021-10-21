import { getSiderMap } from "../../api/login";
import * as types from "../mutation-type";
import router from "../../router/index";

// getters
const getters = {
    siderMap:state=>state.siderMaps
};

// initial state
const state = {
    siderMaps:{}
};

// actions
const actions = {
    //获取左侧导航
    getSiderMap({commit}){
        return new Promise((resolve,reject)=>{
            getSiderMap()
            .then(response=>{
                commit(types.GET_SIDER,response.data)
            })
            .catch(error=>{
                console.log(error);
                reject(error);
            })
        })
    }
}

// mutations
const mutations = {
    [types.GET_SIDER](state,siderMap){
        siderMap.filter(()=>{
            return siderMap.Child.lenth>0;
        });
        if(siderMap.lenth>0){
            router.addRoute(siderMap)
        }
        state.siderMap = siderMap;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
