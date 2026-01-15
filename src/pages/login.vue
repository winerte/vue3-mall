<template>
    <div class="min-h-screen w-full flex flex-col md:flex-row">
        <!-- 左侧欢迎区域 -->
        <div
            class="w-full md:w-4/6 bg-gradient-to-b from-blue-500 to-purple-600 flex items-center justify-center p-6 md:p-0">
            <div class="text-white text-center md:text-left">
                <h1 class="text-3xl md:text-4xl font-bold mb-2">欢迎光临</h1>
                <div class="text-xs sm:text-sm text-gray-300 mt-4 max-w-md">
                    此站点是《vue3 + vite实战商城后台开发》视频课程的演示地址
                </div>
            </div>
        </div>

        <!-- 右侧登录表单 -->
        <div class="w-full md:w-2/6 bg-white flex items-center justify-center p-6">
            <div class="w-full max-w-xs sm:max-w-sm">
                <div class="text-center mb-8">
                    <h2 class="text-gray-800 text-xl md:text-2xl font-bold">欢迎回来</h2>
                    <p class="text-gray-500 text-xs sm:text-sm mt-2">账号密码登录</p>
                </div>

                <el-form :model="lginForm" :rules="rules" ref="ruleForm">
                    <!-- 用户名输入框 -->
                    <el-form-item class="mb-6" prop="username">
                        <el-input placeholder="请输入用户名" class="w-full" prefix-icon="User" v-model="lginForm.username"></el-input>
                    </el-form-item>

                    <!-- 密码输入框 -->
                    <el-form-item class="mb-8" prop="password">
                        <el-input type="password" placeholder="请输入密码" class="w-full" prefix-icon="Lock"
                            show-password v-model="lginForm.password"></el-input>
                    </el-form-item>

                    <!-- 登录按钮 -->
                    <el-form-item>
                        <el-button type="primary"
                            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
                            @click="loginBth"
                            :loading="loading">
                            登录
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref, reactive } from 'vue'
import { login } from '../api/manager'
import { useUserStore } from '../store/manager/userStore'
import {router} from '../router'
const lginForm = reactive({
    username: 'admin',
    password: 'admin'
})

const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 5, max: 20, message: '长度在 6 到 20 个字符', trigger:"blur" }
    ]
}

const ruleForm = ref()
const loading = ref(false)

const userStore = useUserStore()
const loginBth = () => {
    ruleForm.value.validate((valid: boolean)=>{
        if(!valid) {
            console.log('验证失败')
            return false
        }
        loading.value = true
        localStorage.removeItem('token')
        login(lginForm.username,lginForm.password).then((res: any)=>{
            localStorage.setItem('token', res.token)
            userStore.token = res.token
            router.push('/')
        }).finally(()=>{
            loading.value = false
        })
    })
}
   

</script>

<style scoped>
/* 可以添加额外的样式，但主要使用Tailwind CSS */
</style>