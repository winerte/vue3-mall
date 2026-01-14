import { defineStore } from 'pinia';
import { getInfo } from '../../api/manager';
import { ElMessage } from 'element-plus';

// 定义用户信息类型
interface UserInfo {
    id?: number;
    username?: string;
    avatar?: string;
    [key: string]: any;
}

export const useUserStore = defineStore('user', {
    state: () => ({
        token: localStorage.getItem('token') || '',
        userInfo: {} as UserInfo,
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