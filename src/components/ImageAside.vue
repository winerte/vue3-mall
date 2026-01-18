<template>
    <el-aside width="200px" class="aside">
        <div class="top">
            <AsideList v-for="(item,index) in imageListData" :key="index"
            :active="activeId == item.id" @click="handleChangeActiveId(item.id)"
            @edit="handleEdit(item)" @del="handleDelete(item.id)">
                {{item.name}}
            </AsideList>
        </div>
        <div class="bottom">
            <el-pagination background layout="prev, next"
                     :total="total"
                     :current-page="currentPage"
                     :page-size="limit"
                     @current-change="getData"/>
        </div>
    </el-aside>
</template>

<script setup>
import AsideList from './AsideList.vue';
import {imageList} from "../api/image";
import {ref} from "vue";
const imageListData = ref([]);
const total =ref(0);
const currentPage = ref(1);
const activeId  = ref(0);
    imageList(currentPage.value).then(result => {
      imageListData.value = result.list;
      total.value = result.totalCount;
      activeId.value =imageListData.value[0].id;
    })

 const handleChangeActiveId = (id) => {
    activeId.value = id;
    // console.log(id)
  }   

  const handleEdit = (item) => {
    console.log(item)
  }

  const handleDelete = (id) => {
    console.log(id)
  }
</script>

<style scoped>
@import "tailwindcss";

.aside {

    position: relative;
    border-right: 1px solid #eeeeee;

    .top {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 50px;
        overflow-y: auto;

    }
    .bottom {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        top: 500px;
    }
}
</style>