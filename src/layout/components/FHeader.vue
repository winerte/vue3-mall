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
                        <el-dropdown-item @click="editPassBtn">修改密码</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>

        <el-drawer title="修改密码" v-model="drawer"  destroy-on-close :close-on-click-modal="false" :close-on-press-escape="false">
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
        </el-drawer>


    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '～/store/manager/userStore';
import { ref } from 'vue';
import{updataPassword} from '../../api/manager'
const userStore = useUserStore();
const editPassBtn = () => {
    drawer.value = true;
    
};
let drawer = ref(false);

const submitBtn = () => {
    updataPassword(formData.value).then(res => {
        console.log(res);
    });
    drawer.value = false;
};

const formData = ref({
    oldpassword: '',
    password: '',
    repassword: ''
});
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