import { createWebHistory, createRouter } from 'vue-router'
import Login from '../pages/login.vue'
import NotFound from '../pages/404.vue'
import Admin from '../layout/admin.vue'



// 导入Vue Router类型
import type { RouteRecordRaw } from 'vue-router';

// 使用Vue Router的RouteRecordRaw类型
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: Login,
    name: 'login',
    meta: {
      title: '登录'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    meta: {
      title: '404'
    }
  }
]

// 动态路由已移除，所有路由现在直接配置在admin的children中

// 创建admin主路由
const adminRoute: RouteRecordRaw = {
  path: '/',
  component: Admin,
  name: 'admin',
  meta: {
    title: '首页'
  },
  children: [
    // 默认子路由
    {
      path: '',
      redirect: '/goods/list'
    },
    // 直接添加商品管理路由
    {
      path: '/goods/list',
      name: 'goodsList',
      component: () => import('../pages/goods/list.vue'),
      meta: {
        title: '商品管理'
      }
    },
    // 直接添加分类管理路由
    {
      path: '/category/list',
      name: 'categoryList',
      component: () => import('../pages/category/list.vue'),
      meta: {
        title: '分类管理'
      }
    },
    // 直接添加订单列表路由
    {
      path: '/order/list',
      name: 'orderList',
      component: () => import('../pages/order/list.vue'),
      meta: {
        title: '订单列表'
      }
    },
    // 直接添加退款管理路由
    {
      path: '/order/refund',
      name: 'orderRefund',
      component: () => import('../pages/order/refund.vue'),
      meta: {
        title: '退款管理'
      }
    }
  ] // 用于动态添加子路由
}

// 将admin路由添加到静态路由中
routes.push(adminRoute)

// 创建路由实例
export const router = createRouter({
  history: createWebHistory(), //createMemoryHistory()
  routes,
})

// 动态添加路由函数 - 现在所有路由都直接配置在admin的children中，所以不需要动态添加
export function addRoutes(menus: any[]): boolean {
  console.log('Routes are already configured in admin children, no need to add dynamically:', menus);
  // 返回false表示没有添加新路由
  return false;
}

//export default router