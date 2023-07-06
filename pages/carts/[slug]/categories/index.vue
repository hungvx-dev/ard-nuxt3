<template>
  <div>
    <div>categories</div>
    <nav>
      <li>
        <NuxtLink to="/carts/123/categories/123">
          categories
        </NuxtLink>
      </li>
    </nav>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'categories'
})
// const { id } = useRoute().params
// console.log(id)
</script>

<style scoped></style>
