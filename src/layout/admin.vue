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
                    <FTagList>
                    </FTagList>
                    <Transition>
                    <router-view></router-view>
                    </Transition>
                   
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

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>