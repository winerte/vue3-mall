import { defineStore } from 'pinia';
import { ElMessage } from 'element-plus';
import { router, addRoutes } from '../../router';
import {getInfo} from '../../api/manager'

// 定义用户信息类型
interface UserInfo {
    id?: number;
    username?: string;
    avatar?: string;
    [key: string]: any;
}

// 定义菜单类型
interface MenuItem {
    id: number;
    frontpath: string;
    name: string;
    title: string;
    icon?: string;
    child?: MenuItem[];
}

export const useUserStore = defineStore('user', {
    state: () => ({
        token: localStorage.getItem('token') || '',
        userInfo: {} as UserInfo,
        menu: [] as MenuItem[],
    }),
    getters: {
        // 获取格式化后的菜单数据
        formattedMenu(): MenuItem[] {
            return this.menu;
        },
    },
    actions: {
        async getUserInfo() {
            console.log('开始获取用户信息...');
            try {
                const response = await getInfo();
                console.log('API 响应:', response);
                // ... 其他逻辑
                this.userInfo = response;
                this.menu = response.menus;
            } catch (error) {
                console.error('获取用户信息时发生错误:', error);
                throw error;
            }
        },

        logout() {
            localStorage.removeItem('token');
            this.token = '';
            this.userInfo = {} as UserInfo;
            this.menu = [];
            ElMessage.success('退出成功');
            router.push('/login');
        },

        // 重置菜单和路由
        resetMenu() {
            this.menu = [];
        },
    },
});