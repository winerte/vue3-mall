<template>
    <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div class="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
            <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">关于我们</h1>
            
            <div class="space-y-6">
                <div>
                    <h2 class="text-xl font-semibold text-gray-700 mb-2">项目简介</h2>
                    <p class="text-gray-600 leading-relaxed">
                        这是一个基于 Vue 3 + Vite + TypeScript 开发的商城后台管理系统，使用 Element Plus 作为 UI 框架，Pinia 进行状态管理。
                    </p>
                </div>
                
                <div>
                    <h2 class="text-xl font-semibold text-gray-700 mb-2">技术栈</h2>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        <div class="bg-blue-50 p-4 rounded-lg text-center">
                            <span class="font-medium text-blue-800">Vue 3</span>
                        </div>
                        <div class="bg-green-50 p-4 rounded-lg text-center">
                            <span class="font-medium text-green-800">Vite</span>
                        </div>
                        <div class="bg-purple-50 p-4 rounded-lg text-center">
                            <span class="font-medium text-purple-800">TypeScript</span>
                        </div>
                        <div class="bg-yellow-50 p-4 rounded-lg text-center">
                            <span class="font-medium text-yellow-800">Element Plus</span>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h2 class="text-xl font-semibold text-gray-700 mb-2">功能特点</h2>
                    <ul class="list-disc list-inside space-y-2 text-gray-600">
                        <li>响应式设计，适配各种屏幕尺寸</li>
                        <li>完整的用户认证和权限管理</li>
                        <li>商品管理、订单管理、用户管理等核心功能</li>
                        <li>现代化的 UI 设计，良好的用户体验</li>
                        <li>TypeScript 类型支持，代码更加健壮</li>
                    </ul>
                </div>
            </div>
            
            <div class="mt-8 text-center text-gray-500 text-sm">
                © 2026 Vue3 Mall 后台管理系统
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// About 页面逻辑
</script>

<style scoped>
/* 可以添加额外的样式 */
</style>