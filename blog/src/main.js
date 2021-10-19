import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index'
import VueRouter from 'vue-router'
import store from './store/index';
import IconSvg from "./components/SvgIcon.vue"; // svg组件
import "./assets/icons/iconfont";
import "./mock"; // 模拟数据


Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false;
// 注册全局组件（register global）
Vue.component("icon-svg", IconSvg);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
