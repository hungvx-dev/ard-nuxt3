<template>
  <div>test</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'carts'
})
const route = useRoute()
const a = ref(1)
console.log(route, a)
</script>

<style scoped></style>
