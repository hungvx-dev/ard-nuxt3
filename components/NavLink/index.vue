<template>
  <nav>
    <el-button type="primary" :icon="Share" link>
      <NuxtLink to="/"> Home </NuxtLink>
    </el-button>
    <el-button type="primary" :icon="Share" link>
      <NuxtLink to="/about"> About </NuxtLink>
    </el-button>
    <el-button type="primary" :icon="Share" link>
      <NuxtLink to="/products"> Products </NuxtLink>
    </el-button>
    <el-button type="primary" :icon="Share" link>
      <NuxtLink to="/carts/123"> carts </NuxtLink>
    </el-button>
    <el-button type="primary" :icon="Share" link>
      <NuxtLink to="/carts/123/categories"> categories </NuxtLink>
    </el-button>
    <el-button type="primary" :icon="Share" link>
      <NuxtLink to="/tsx-file">With tsx</NuxtLink>
    </el-button>
  </nav>
</template>
<script setup lang="ts">
import { Share } from '@element-plus/icons-vue'
</script>

<style scoped></style>
