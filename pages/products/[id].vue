<template>
  <div>test</div>
</template>

<script setup lang="ts">
import { LayoutKey } from '.nuxt/types/layouts'

definePageMeta({
  layout: 'products'
})
const layoutKey: LayoutKey = 'products'
console.log(layoutKey)
const route = useRoute()
console.log(route)
console.log(route.params)
const a = ref(1)
console.log(a.value)
</script>

<style scoped></style>
