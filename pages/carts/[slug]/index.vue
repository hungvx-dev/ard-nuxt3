<template>
  <div>{{ slug }}</div>
</template>

<script setup lang="ts">
const { slug } = useRoute().params

definePageMeta({
  layout: 'carts'
})
console.log(slug)
</script>

<style scoped></style>
