<template>
  <div>test index</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'products'
})
const counterStore = useCounter()
console.log(counterStore.n)
</script>

<style scoped></style>
