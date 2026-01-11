<template>
    <el-result icon="warning" title="404页面错误" subTitle="点击下方按钮返回首页">
      <template #extra>
        <el-button type="primary" size="medium" @click="$router.push('/')">返回首页</el-button>
      </template>
    </el-result>
</template>