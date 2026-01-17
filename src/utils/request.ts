import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '../store/manager/userStore';

const request = axios.create({
    baseURL: '/api',
    timeout: 10000, // 调整为10秒超时
    headers: {'X-Custom-Header': 'foobar'}
})


// 添加请求拦截器
request.interceptors.request.use(function (config) {
  const userStore = useUserStore()
    // 在发送请求之前做些什么
  let token = userStore.token
    if(token){
      console.log('拦截器的token',token);
      config.headers.token = token
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const res = response.data;
    // 检查响应数据结构，确保安全访问
    if (res && typeof res === 'object') {
        return res.data || res;
    }
    return res;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    let errorMessage = '请求失败';
    if (error.response) {
        // 服务器返回了错误状态码
        const res = error.response.data;
        errorMessage = res.msg || res.message || `请求错误: ${error.response.status}`;
        
        // 处理非法token或登录失效情况
        if (errorMessage.includes('非法token') || errorMessage.includes('登录') || errorMessage.includes('token')) {
            // 清除本地存储的token
            localStorage.removeItem('token');
            // 跳转到登录页
            window.location.href = '/login';
        }
    } else if (error.request) {
        // 请求已发送但没有收到响应
        errorMessage = '网络错误，服务器无响应';
    } else {
        // 请求配置出错
        errorMessage = error.message;
    }
    
    // 避免重复显示错误消息
    if (!errorMessage.includes('非法token')) {
        ElMessage.error(errorMessage);
    }
    
    return Promise.reject(error);
  });


export default request