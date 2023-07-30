<template>
  <div class="page-index">
    <Examples />
  </div>
</template>
<script setup>
const counterStore = useCounter()
const colorMode = useColorMode()
onMounted(() => {
  colorMode.value = counterStore.theme
})
</script>
<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
.page-index {
  padding-top: 60px;
  text-align: center;
}
</style>
