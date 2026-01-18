<template>
    <div class="aside-list" :class="{ 'active' : active }">
        <span class="truncate"><slot></slot></span>
    <el-button class=" ml-auto px-1" type="text" icon="edit" @click="$emit('edit')"></el-button>
    <el-button class=" px-1" type="text" icon="close" @click="$emit('del')"></el-button>
    </div>
    
</template>

<script setup>
defineProps({
    active:{
        type:Boolean,
        default:false
    }
})

const emit = defineEmits(["edit","del"])
</script>

<style scoped>
    @import "tailwindcss";
.aside-list {
  border-bottom: 1px solid #f4f4f4;
  cursor: pointer;
  @apply flex items-center p-3 text-sm text-gray-600;
}

.aside-list:hover, .active {
  @apply bg-blue-50;
}
</style>