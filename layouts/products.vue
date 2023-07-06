<template>
  <div>
    <header>
      <nav>
        <li>
          <NuxtLink to="/">
            Home
          </NuxtLink>
        </li>
      </nav>
    </header>

    <slot />

    <footer>
      <li>
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">
          About
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/products">
          Products
        </NuxtLink>
      </li>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
