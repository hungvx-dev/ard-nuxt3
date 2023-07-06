<template>
  <div>
    <header>
      <nav>
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
        <li>
          <NuxtLink to="/carts">
            carts
          </NuxtLink>
        </li>
        <a href="/about">about</a>
      </nav>
    </header>

    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
