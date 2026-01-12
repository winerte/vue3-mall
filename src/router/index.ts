import { createWebHistory, createRouter } from 'vue-router'
import Index from '../pages/index.vue'
import Login from '../pages/login.vue'
import About from '../pages/about.vue'
import NotFound from '../pages/404.vue'



const routes = [
  { path: '/', component: Index },
  {
    path: '/login',
    component: Login
  },
  { path: '/about', component: About },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(), //createMemoryHistory()
  routes,
})

export default router