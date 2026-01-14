import { createWebHistory, createRouter } from 'vue-router'
import Login from '../pages/login.vue'
import About from '../pages/about.vue'
import NotFound from '../pages/404.vue'
import Admin from '../layout/admin.vue'



const routes = [
  { path: '/', component: Admin ,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  { path: '/about', component: About,
    meta: {
      title: '关于'
    }
   },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(), //createMemoryHistory()
  routes,
})

export default router