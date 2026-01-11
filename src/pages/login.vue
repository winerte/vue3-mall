<template>
    <div class="h-screen w-screen flex">
        <!-- 左侧欢迎区域 -->
        <div class="w-4/6 bg-gradient-to-b from-blue-500 to-purple-600 flex items-center justify-center ">

            <div class="text-white text-4xl font-bold">
                欢迎光临
                <div class="text-sm text-gray-300 mt-4">
                    此站点是《vue3 + vite实战商城后台开发》视频课程的演示地址
                </div>
            </div>
        </div>


        <!-- 右侧登录表单 -->
        <div class="w-2/6 bg-white flex items-center justify-center p-8">
            <div class="w-full max-w-sm">
                <div class="text-center mb-8">
                    <h2 class="text-gray-800 text-2xl font-bold">欢迎回来</h2>
                    <p class="text-gray-500 text-sm mt-2">账号密码登录</p>
                </div>

                <el-form>
                    <!-- 用户名输入框 -->
                    <el-form-item class="mb-6">
                        <el-input placeholder="请输入用户名" class="w-full" :prefix-icon="User"></el-input>
                    </el-form-item>

                    <!-- 密码输入框 -->
                    <el-form-item class="mb-8">
                        <el-input type="password" placeholder="请输入密码" class="w-full" :prefix-icon="Lock"
                            show-password></el-input>
                    </el-form-item>

                    <!-- 登录按钮 -->
                    <el-form-item>
                        <el-button type="primary"
                            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                            登录
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
</script>

<style scoped>
/* 可以添加额外的样式，但主要使用Tailwind CSS */
</style>