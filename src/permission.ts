import { router,addRoutes } from "./router";
import { useUserStore } from "./store/manager/userStore";
import 'nprogress/nprogress.css';
import nprogress from 'nprogress';

router.beforeEach(async (to, _from, next) => {
    nprogress.start();
    const userStore = useUserStore();
    const token = userStore.token;
    document.title = `XX后台管理系统-${to.meta.title || '首页'}`;

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

        // 有token，检查是否已经获取了用户信息
        if (userStore.menu.length > 0) {
            // 已经获取了用户信息，直接放行
            next();

        } else {
            // 没有获取用户信息，调用getUserInfo获取
            try {
                // getUserInfo内部已经处理了路由添加，所以这里不需要再调用addRoutes
                 let res = await userStore.getUserInfo();
                  addRoutes(res.data.menus)
                // 路由添加后，直接放行
                next();
            } catch (error) {
                console.log(error);
                // 获取用户信息失败，跳转到登录页
                next('/login');
            }
        }
    } else {
        // 无token，跳转到登录页
        next('/login');
    }
});

router.afterEach((_to, _from) => {
    nprogress.done();
});