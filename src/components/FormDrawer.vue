<template>
    <el-drawer 
        v-model="showDrawer"
        :title="props.title"
        :size="props.size"
        :destroy-on-close="props.destroyOnClose"
        :close-on-click-modal="props.closeOnClickModal"
        :close-on-press-escape="props.closeOnPressEscape"
    >
        <slot></slot>
        
        <!-- 底部按钮区域 -->
        <template #footer>
            <div class="flex justify-end gap-2">
                <el-button @click="handleCancel">取消</el-button>
                <el-button type="primary" @click="handleConfirm">{{ props.confirmText }}</el-button>
            </div>
        </template>
    </el-drawer>
</template>

<script setup>
import { ref, watch } from 'vue'

// 定义组件属性
const props = defineProps({
  // 抽屉标题
  title: {
    type: String,
    default: ""
  },
  // 抽屉大小
  size: {
    type: String,
    default: "45%"
  },
  // 关闭时是否销毁内容
  destroyOnClose: {
    type: Boolean,
    default: false
  },
  // 确认按钮文本
  confirmText: {
    type: String,
    default: "提交"
  },
  // 点击遮罩层是否关闭
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  // 按ESC键是否关闭
  closeOnPressEscape: {
    type: Boolean,
    default: true
  }
})

// 定义事件
const emit = defineEmits(['confirm', 'cancel', 'close'])

// 抽屉显示状态
const showDrawer = ref(false)

// 监听抽屉关闭事件
watch(showDrawer, (newVal) => {
  if (!newVal) {
    emit('close')
  }
})

// 打开抽屉
const open = () => {
  showDrawer.value = true
}

// 关闭抽屉
const close = () => {
  showDrawer.value = false
}

// 取消按钮点击事件
const handleCancel = () => {
  emit('cancel')
  close()
}

// 确认按钮点击事件
const handleConfirm = () => {
  emit('confirm')
}

// 暴露方法给父组件
defineExpose({
  open,
  close
})
</script>