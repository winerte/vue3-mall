<template>
  <div class="f-menu">
    <el-menu
      :default-active="activePath"
      class="el-menu-vertical-demo"
      router
      @open="handleOpen"
      @close="handleClose"
      active-text-color="#ffd04b"
    >
      <!-- 递归渲染菜单 -->
      <template v-for="menu in menuList" :key="menu.id">
        <!-- 有子菜单 -->
        <el-sub-menu v-if="menu.child && menu.child.length > 0" :index="menu.frontpath || `menu-${menu.id}`">
          <template #title>
            <el-icon>
              <component :is="menu.icon || 'Menu'" />
            </el-icon>
            <span>{{ menu.title || menu.name || '未知菜单' }}</span>
          </template>
          <!-- 递归调用 -->
          <template v-for="subMenu in menu.child" :key="subMenu.id">
            <el-menu-item v-if="!subMenu.child || subMenu.child.length === 0" :index="subMenu.frontpath">
              <el-icon>
                <component :is="subMenu.icon || 'Menu'" />
              </el-icon>
              <span>{{ subMenu.title || subMenu.name || '未知菜单' }}</span>
            </el-menu-item>
            <!-- 嵌套子菜单 -->
            <el-sub-menu v-else :index="subMenu.frontpath || `submenu-${subMenu.id}`">
              <template #title>
                <el-icon>
                  <component :is="subMenu.icon || 'Menu'" />
                </el-icon>
                <span>{{ subMenu.title || subMenu.name || '未知菜单' }}</span>
              </template>
              <!-- 递归调用 -->
              <el-menu-item v-for="item in subMenu.child" :key="item.id" :index="item.frontpath">
                <el-icon>
                  <component :is="item.icon || 'Menu'" />
                </el-icon>
                <span>{{ item.title || item.name || '未知菜单' }}</span>
              </el-menu-item>
            </el-sub-menu>
          </template>
        </el-sub-menu>
        <!-- 无子菜单 -->
        <el-menu-item v-else :index="menu.frontpath">
          <el-icon>
            <component :is="menu.icon || 'Menu'" />
          </el-icon>
          <span>{{ menu.title || menu.name || '未知菜单' }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useUserStore } from '../../store/manager/userStore';
import { useRoute } from 'vue-router';

const userStore = useUserStore();
const route = useRoute();

// 获取当前激活的路径
const activePath = computed(() => route.path);

// 从store获取菜单列表
const menuList = computed(() => {
  const menu = userStore.formattedMenu;
  console.log('Menu data from store:', menu);
  // 检查菜单数据结构
  menu.forEach(item => {
    console.log('Menu item:', item.id, item.title, item.frontpath);
  });
  return menu;
});

// 菜单打开事件
const handleOpen = (key: string, keyPath: string[]) => {
  console.log('menu open:', key, keyPath);
};

// 菜单关闭事件
const handleClose = (key: string, keyPath: string[]) => {
  console.log('menu close:', key, keyPath);
};

// 组件挂载时获取菜单数据
onMounted(() => {
  // if (menuList.value.length === 0) {
  //   userStore.getUserInfo();
  // }
});
</script>

<style scoped>
.f-menu {
  height: 100%;
  overflow-y: auto;
}

.el-menu-vertical-demo {
  height: 100%;
  border-right: none;
  /* 确保菜单项文字可见 */
  color: #303133;
}

/* 确保菜单项文本可见 */
.el-menu-item {
  color: #303133 !important;
}

.el-sub-menu__title {
  color: #303133 !important;
}

/* 自定义滚动条样式 */
.f-menu::-webkit-scrollbar {
  width: 6px;
}

.f-menu::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.f-menu::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

.f-menu::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>