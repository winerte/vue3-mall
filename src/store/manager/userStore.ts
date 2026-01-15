import { defineStore } from 'pinia';
import { ElMessage } from 'element-plus';
import { router, addRoutes } from '../../router';
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
            try {
                // 使用类型断言，因为我们在request.ts中已经通过响应拦截器处理了响应数据
                let res;
                // 强制使用模拟数据，确保菜单数据的一致性
                console.log('Using mock data for menu');
                res = {
                    userInfo: { id: 1, username: 'admin' },
                    menu: [
                        {
                            id: 1,
                            frontpath: '/goods/list',
                            name: 'goodsList',
                            title: '商品管理',
                            icon: 'Goods',
                            child: []
                        },
                        {
                            id: 2,
                            frontpath: '/category/list',
                            name: 'categoryList',
                            title: '分类管理',
                            icon: 'Category',
                            child: []
                        },
                        {
                            id: 3,
                            frontpath: '',
                            name: 'order',
                            title: '订单管理',
                            icon: 'Order',
                            child: [
                                {
                                    id: 4,
                                    frontpath: '/order/list',
                                    name: 'orderList',
                                    title: '订单列表',
                                    icon: 'List',
                                    child: []
                                },
                                {
                                    id: 5,
                                    frontpath: '/order/refund',
                                    name: 'orderRefund',
                                    title: '退款管理',
                                    icon: 'Refund',
                                    child: []
                                }
                            ]
                        }
                    ]
                };
                
                // 根据实际响应数据结构调整
                this.userInfo = res.userInfo || {};
                this.menu = res.menu || [];
                
                // 调用addRoutes函数动态添加路由
                if (this.menu.length > 0) {
                    addRoutes(this.menu);
                }
            } catch (error) {
                ElMessage.error('获取用户信息失败');
                throw error; // 抛出错误，让permission.ts能够捕获
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