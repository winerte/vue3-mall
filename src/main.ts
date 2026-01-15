import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import {router} from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import pinia from './store'
import './permission' // 添加这行，

// 全局错误处理
console.log('App is starting...');

// 创建应用实例
const app = createApp(App);

// 注册所有 Element Plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

// 添加全局错误捕获
app.config.errorHandler = (err, vm, info) => {
    console.error('Global error:', err);
    console.error('Component:', vm);
    console.error('Info:', info);
};

// 挂载应用
app.use(router);
app.use(ElementPlus);
app.use(pinia);

console.log('App is mounting...');
app.mount('#app');
console.log('App mounted successfully!');
