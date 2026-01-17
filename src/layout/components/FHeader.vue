<template>
    <div class="f-header">
        <span class="logo">
            <el-icon class="mr-1">
                <school />
            </el-icon>
            后台管理系统
        </span>
        <el-icon class="icon-btn">
            <fold />
        </el-icon>
        <el-icon class="icon-btn" @click="handleRefresh">
            <refresh />
        </el-icon>
        <div class="ml-auto flex items-center">
            <el-icon class="icon-btn">
                <full-screen />
            </el-icon>
            <el-dropdown class="dropdown">
                <span class="flex items-center text-lime-50">
                    <el-avatar class="mr-2" :size="50" :src=userStore.userInfo.avatar></el-avatar>
                    {{ userStore.userInfo.username }}

                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="editPassBtn">修改密码</el-dropdown-item>
                        <el-dropdown-item @click='logoutBtn'>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>

        <FormDrawer 
            ref="formDrawerRef" 
            title="修改密码"   
            destroy-on-close 
            :close-on-click-modal="false" 
            :close-on-press-escape="false"
            @confirm="submitBtn"
            @cancel="closeDrawer"
        >
            <el-form :model="formData" class="space-y-4">
                <el-form-item label="旧密码" class="mb-4">
                    <el-input 
                        type="password"
                        placeholder="请输入旧密码" 
                        v-model="formData.oldpassword"
                        show-password
                    ></el-input>
                </el-form-item>
                <el-form-item label="新密码" class="mb-4">
                    <el-input 
                        type="password"
                        placeholder="请输入新密码" 
                        v-model="formData.password"
                        show-password
                    ></el-input>
                </el-form-item>
                <el-form-item label="确认密码" class="mb-4">
                    <el-input 
                        type="password"
                        placeholder="请确认新密码" 
                        v-model="formData.repassword"
                        show-password
                    ></el-input>
                </el-form-item>
            </el-form>
        </FormDrawer>

        <!-- <el-drawer title="修改密码" v-model="drawer"  destroy-on-close :close-on-click-modal="false" :close-on-press-escape="false">
        <el-form :model="formData">
            <el-form-item label="旧密码">
                <el-input placeholder="请输入内容" v-model="formData.oldpassword"></el-input>
            </el-form-item>
            <el-form-item label="新密码">
                <el-input placeholder="请输入内容" v-model="formData.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input placeholder="请输入内容" v-model="formData.repassword"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitBtn">修改密码</el-button>
                <el-button @click="drawer = false">取消</el-button>
            </el-form-item>
        </el-form>
        </el-drawer> -->


    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../../store/manager/userStore';
import { ref } from 'vue';
import { logout, updatePassword } from '../../api/manager'
// @ts-ignore: Vue component has no declaration file
import FormDrawer from '../../components/FormDrawer.vue';
import { ElMessage } from 'element-plus';

const userStore = useUserStore();

// 定义表单数据
const formData = ref({
    oldpassword: '',
    password: '',
    repassword: ''
});

// 定义FormDrawer引用
const formDrawerRef = ref<any>(null);

// 打开修改密码抽屉
const editPassBtn = () => {
    if (formDrawerRef.value) {
        formDrawerRef.value.open();
    }
};

// 关闭修改密码抽屉
const closeDrawer = () => {
    if (formDrawerRef.value) {
        formDrawerRef.value.close();
    }
};

// 提交修改密码
const submitBtn = () => {
    // 表单验证
    if (!formData.value.oldpassword) {
        ElMessage.warning('请输入旧密码');
        return;
    }
    if (!formData.value.password) {
        ElMessage.warning('请输入新密码');
        return;
    }
    if (formData.value.password !== formData.value.repassword) {
        ElMessage.warning('两次输入的密码不一致');
        return;
    }
    
    // 调用API修改密码
    updatePassword(formData.value)
        .then(res => {
            console.log('修改密码成功:', res);
            ElMessage.success('修改密码成功');
            closeDrawer();
            // 重置表单
            formData.value = {
                oldpassword: '',
                password: '',
                repassword: ''
            };
        })
        .catch(err => {
            console.error('修改密码失败:', err);
            ElMessage.error('修改密码失败');
        });
};

const logoutBtn = () => {
    logout().then(res => {
        console.log('退出登录成功:', res);
        ElMessage.success('退出登录成功');
        userStore.logout();
    }).catch(err => {
        console.error('退出登录失败:', err);
        ElMessage.error('退出登录失败');
    });
};

const handleRefresh =() =>{
    location.reload()
}
</script>

<style scoped>
@import "tailwindcss";

.f-header {
    @apply flex items-center bg-blue-700 top-0 left-0 right-0;
    height: 64px;
    z-index: 1000;
    position: relative;

    .logo {
        width: 250px;
        @apply flex justify-center items-center text-xl font-thin;
    }

    .icon-btn {
        @apply flex justify-center items-center;
        width: 42px;
        height: 64px;
        cursor: pointer;
    }

    .dropdown {
        @apply flex justify-center items-center mx-5;
        height: 64px;
        cursor: pointer;
    }
    
}
</style>