import axios from 'axios';
import {BASE_URL} from '../config/config';
// import store from '../store/index'
//  import router from '../router/index';

// //创建实例
// const service = axios.create({
//     baseURL: BASE_URL, // api的base_url
//     timeout:5000
// })

const service = axios.create({
    baseURL: BASE_URL,//process.env.VUE_APP_BASE_API,
    timeout: 5000 // request timeout
})

// service.interceptors.request.use()
// service.interceptors.response.use



// respone拦截器
// service.interceptors.response.use(
//     response => {
//         const data = response.data;
//         if (data.code) {
//             if (data.code === 2) {
//                 store.dispatch("fedLogout").then(() => {
//                     Message.error("验证失败,请重新登录");
//                     router.push({
//                         path: "/login",
//                         query: { redirect: router.currentRoute.fullPath } // 从哪个页面跳转过来
//                     });
//                 });
//             }
//         }
//         return data;
//     },
//     error => {
//         Message({
//             message: error.message,
//             type: "error",
//             duration: 5 * 1000
//         });
//         return Promise.reject(error);
//     }
// );

export default service;