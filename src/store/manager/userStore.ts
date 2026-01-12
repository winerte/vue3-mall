import { defineStore } from 'pinia';
import { getInfo } from '../../api/manager';
import { ElMessage } from 'element-plus';

export const useUserStore = defineStore('user', {
    state: () => ({
        token: localStorage.getItem('token') || '',
        userInfo: {},
    }),
    getters: {
    },
    actions: {
        async getUserInfo() {
            try {
                const res = await getInfo();
                // 根据实际响应数据结构调整
                this.userInfo = res;
            } catch (error) {
                ElMessage.error('获取用户信息失败');
            }
        },
    },
});