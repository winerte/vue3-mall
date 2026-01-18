<template>
    <div class="tag-list">
        <el-tabs v-model="activeTab" type="card" closable @tab-remove="removeTab"
        @tab-add="addTab" @edit="tabChange" style="flex: 1px;">
            <el-tab-pane v-for="(item, index) in tabList" :key="item.path" :label="item.name" :name="item.path">
            </el-tab-pane>
        </el-tabs>
        <span class="tag-btn">
            <el-dropdown >
            <span>
                <el-icon>
                    <arrow-down />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>关闭其他</el-dropdown-item>
                    <el-dropdown-item>关闭全部</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        </span>
       
    </div>

    <div style="height:44px;"></div>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue' 
import { onBeforeRouteUpdate } from 'vue-router'
import { useUserStore } from '～/store/manager/userStore'
import { useRoute } from 'vue-router'
import { router } from '～/router'
const tabList = ref([
    {
        name: '后台首页',
        path: '/',
    }
])
const route = useRoute()
const userStore = useUserStore()
const activeTab = ref(route.path)

onMounted(() => {
    console.log('tabs',userStore.tabList)
    tabList.value = userStore.tabList
})

const removeTab = (v: any) => {
    if(activeTab.value == v){
        tabList.value.forEach((i,index) => {
           if(i.path == v){
               const nextTab = tabList.value[index+1] || tabList.value[index-1]
               if(nextTab){
                   activeTab.value = nextTab.path
                   tabList.value.splice(index,1)
               }
           }
        })
    }
    console.log('removeTab',tabList.value)
    userStore.tabList = tabList.value
    router.push(activeTab.value)
}
const addTab = (tab:any) => {
    console.log(tab)
   let noTab = tabList.value.findIndex(item => item.path == tab.path) == -1
    if(noTab){
        tabList.value.push(tab)
    }
    userStore.tabList = tabList.value
    console.log('tabs',userStore.tabList)
}
//重点
onBeforeRouteUpdate((to,from) => {
    activeTab.value = to.path
    addTab({
        name: to.meta.title,
        path: to.path
    })
})

const tabChange = (tab:any) => {
    console.log('change',tab,tabList.value)
 
    // activeTab.value = tab
//    if(tabList.value.length == 1){
//     router.push('/')
//    }else{
//     router.push(tab)
//    }
    
}

</script>

<style scoped>
@import "tailwindcss";

.tag-list {
    @apply  flex items-center   h-10 px-4  z-1000
}
.tag-btn{
    @apply flex items-center justify-center w-10 h-10 ml-auto px-2  rounded
    
}
</style>