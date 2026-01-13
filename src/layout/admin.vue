<template>

    <div class="common-layout">
        <el-container>
            <el-header>
                <FHeader></FHeader>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <FMenu></FMenu>
                </el-aside>
                <el-main>
                    <FTagList></FTagList>
                </el-main>
            </el-container>
        </el-container>

    </div>

</template>

<script setup lang="ts">
import FHeader from './components/FHeader.vue';
import FMenu from "./components/FMenu.vue";
import FTagList from "./components/FTagList.vue";

</script>