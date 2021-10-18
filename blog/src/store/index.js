import Vue from "vue";
import Vuex from "vuex";
import login from './app/login'
import app from './app/app'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        app,
        login
    }
})