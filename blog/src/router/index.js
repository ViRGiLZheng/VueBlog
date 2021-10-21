import VueRouter from 'vue-router';
// import ROUTE_MODE from '../config/config'
import login from '../views/login.vue';
import Home from '../views/home/index.vue'
import NProgress from "nprogress"; // Progress 进度条
import "nprogress/nprogress.css"; // Progress 进度条样式
import article from '../views/blog/article.vue'

const err401 = r =>
    require.ensure([], () => r(require("../views/error/err401.vue")), "home");
const err404 = r =>
    require.ensure([], () => r(require("../views/error/err404.vue")), "home");

const routes = [
    {
        path: "*",
        component: err404,
        hidden: true
    },
    {
        path: "/401",
        component: err401,
        name: "401",
        hidden: true
    },
    {
        path: "/404",
        component: err404,
        name: "404",
        hidden: true
    },
    {
        path: "/500",
        component: err404,
        name: "500",
        hidden: true
    },
    {
        path: '/login',
        component: login
    },
    {
        path: "/",
        component: Home,
        name: "首页",
        hidden: true
    }
]

let router = new VueRouter({
    // mode: ROUTE_MODE,
    routes,
})

// register global progress.
const whiteList = ["/login", "/401", "/404", "/500"]; // 不重定向白名单
router.beforeEach((to, from, next) => {
    NProgress.start();
    if (whiteList.indexOf(to.path) !== -1) {
        next();
        return;
    }

    if (router.app.$options.store.state.login.pass) {
        if (to.path === "/") {
            next();
            NProgress.done(); // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
            return;
        }
    }

    next({ path: "/login" });
    NProgress.done(); // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
    return;
});

//动画效果一致性
router.afterEach(() => {
    NProgress.done();
});
export default router


const siderMap = [
    {
        path: "/app/Java",
        redirect: "/app/Java",
        component: Home,
        name: "Java",
        // noDropdown: true,
        children:
            [
                {
                    path: "class",
                    component: article,
                    name: "类",
                },
                {
                    path: "class2",
                    component: article,
                    name: "对象",
                },
                {
                    path: "class3",
                    component: article,
                    name: "JS",
                }
            ]
    }
]
export { siderMap }