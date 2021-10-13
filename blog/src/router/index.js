import VueRouter from 'vue-router';
import ROUTER_MODE from '../config/config'
import login from '../views/login.vue'

const routes = [
    {
        path: '*',
        component: login
    }
]

let router = new VueRouter({
    mode: ROUTER_MODE,
    routes: routes,
})
export default router