import router from "./router";
import { useUserStore } from "./store/manager/userStore";
import 'nprogress/nprogress.css';
import nprogress from 'nprogress';

router.beforeEach((to, _from, next) => {
    nprogress.start();
    const userStore = useUserStore();
    const token = userStore.token;
    
    // 1. 如果已登录且访问的是登录页，重定向到首页
    if (token && to.path === '/login') {
        next('/');
        return;
    }
    
    // 2. 登录页面，允许未登录用户访问
    if (to.path === '/login') {
        next();
        return;
    }
    
    // 3. 非登录页面，检查token
    if (token) {
        // 有token，调用getUserInfo获取用户信息
        userStore.getUserInfo().finally(() => {
            next();
        });
    } else {
        // 无token，跳转到登录页
        next('/login');
    }
});

router.afterEach((_to, _from) => {
    nprogress.done();
});