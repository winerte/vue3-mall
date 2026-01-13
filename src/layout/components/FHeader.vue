<template>
    <div class="f-header">
        <span class="logo">
            <el-icon>
                <school />
            </el-icon>
            后台管理系统
        </span>
        <el-icon class="icon-btn">
            <fold />
        </el-icon>
        <el-icon class="icon-btn">
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
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        </div>
       


    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '～/store/manager/userStore';
const userStore = useUserStore();
</script>

<style scoped>
@import "tailwindcss";

.f-header {
    @apply flex items-center bg-blue-700 top-0 left-0 right-0;
    height: 64px;
    z-index: 1000;
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