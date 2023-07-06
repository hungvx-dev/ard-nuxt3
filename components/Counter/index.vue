<template>
  <div>
    <el-input-number v-model="counterStore.counter" />

    <el-button class="m-4" @click="counterStore.increment(1)">
      increment
    </el-button>
  </div>
</template>

<script setup lang="ts">
const counterStore = useCounter()
</script>

<style scoped></style>
