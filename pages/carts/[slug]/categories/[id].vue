<template>
  <div>{id}</div>
</template>

<script setup lang="ts">
const { id } = useRoute().params
console.log(id)
definePageMeta({
  layout: 'categories'
})
</script>

<style scoped></style>
