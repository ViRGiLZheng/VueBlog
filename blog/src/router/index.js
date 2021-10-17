import VueRouter from 'vue-router';
import ROUTER_MODE from '../config/config'
import login from '../views/login.vue'
import NProgress from "nprogress"; // Progress 进度条
import "nprogress/nprogress.css"; // Progress 进度条样式
import store from '../store/index'

const routes = [
    {
        path: '/login',
        component: login
    }
]

let router = new VueRouter({
    mode: ROUTER_MODE,
    routes: routes,
})

// register global progress.
const whiteList = ["/login", "/401", "/404", "/500"]; // 不重定向白名单
router.beforeEach((to, from, next)=>{
    NProgress.start();
    if (whiteList.indexOf(to.path) !== -1) {
        next();
        NProgress.down();
        return;
    }

    if (to.path === "/") {
        next({ path: "/login" });
        NProgress.done(); // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
        return;
    }

    let redirect = to.fullPath;
    store.dispatch("loginOut").then(() => {
        next({
            path: "/login",
            query: { redirect: redirect }
        });
    }); // 否则全部重定向到登录页
    NProgress.down();
});

//动画效果一致性
router.afterEach(() => {
    NProgress.done();
});
export default router