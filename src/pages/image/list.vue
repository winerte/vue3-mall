<template>
    <el-container class=" bg-white rounded" style="height:70vh;">
    <el-header>
        <div>
            <el-button type="primary" >新增图片分类</el-button>
            <el-button type="warning">上传图片</el-button>
        </div>
    </el-header>
    <el-container>
        <ImageAside>

        </ImageAside>
     
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
    import ImageAside from '～/components/ImageAside.vue';
</script>

<style scoped>
    @import "tailwindcss";
</style>