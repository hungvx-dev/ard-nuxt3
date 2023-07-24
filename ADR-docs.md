## Context and Problem Statement

...

## Why NuxtJS

...

## Considered Options

##### Pros:

- It's great for SEO: it solves all the SEO issues that single-page apps are reputed for (client-rendered content, mobile web performance, URL and routing, etc.).
- Code splitting: Nuxt automatically splits your code into smaller chunks, which can help reduce the initial load time of your application.
- Server-side rendering out of the box: Nuxt comes with built-in SSR capabilities, so you don't have to set up a separate server yourself.
- Better performance on low-powered devices: it reduces the amount of JavaScript that needs to be downloaded and executed on the client-side, which can be beneficial for low-powered devices that may struggle with processing heavy JavaScript applications.

##### Cons:

- Common plugins that don't exist or which aren't that solid (lack of support for standard plugins). There are Vue plugins designed to work on the client-side only (the server just wasn't added to the "big picture" when they were being developed).
- There's a relatively small community behind it:
  - The product documentation is not that extensive
  - Fewer resources for you to dig into at need

### Nuxt.js Concepts

- Nuxt is a JavaScript framework and it was built on top of Vue.js to help developers with creating performance web applications and super-fast static websites. It gives a simpler way to create universal or single-page Vue apps.
- It helps you boost your SPAs' SEO, it enables you to generate your apps both on the server-side and statically.

### Directory structure

<pre>
├── .nuxt
├── assets
│   └── css
│       └── tailwind.css
├── components
│   ├── Counter
│   │   └── index.vue
│   └── Examples
│       └── index.vue
├── composables
├── layouts
│   ├── about.vue
│   ├── carts.vue
│   ├── categories.vue
│   ├── default.vue
│   └── products.vue
├── middleware
├── pages
│   ├── about.vue
│   ├── carts
│   │   ├── [id].vue
│   │   └── index.vue
│   ├── index.vue
│   └── products
│       ├── [slug]
│       │   ├── categories
│       │   │   ├── [id].vue
│       │   │   └── index.vue
│       │   └── index.vue
│       └── index.vue
├── public
│   └── favicon.ico
├── server
│   └── tsconfig.json
├── stores
│   └── counter.ts
├── plugins
│   ├── myPlugins.vue
│   └── myOtherPlugins 
│       └── index.vue
├── ADR-docs.md
├── README.md
├── nuxt.config.ts
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.ts
└── tsconfig.json
</pre>

- `.nuxt`: contains everything needed to generate your vue application and is required that you do not make changes to any file in this directory.
- `.output`: holds all build files when building your Nuxt application to production (nuxt build). It is also required that you do not touch files in this directory when deploying your application to production.
- `assets`: is used to add all the website's assets that the build tool (webpack or Vite) will process.
  - Stylesheets (CSS, SASS, etc.)
  - Fonts
  - Images that won't be served from the **public/** directory.
- `components`: is where you put all your Vue components which can then be imported inside your pages or other components. Nuxt automatically imports any components in your **components/** directory.
- `composables`: is functions that leverage Vue.js composition API to create reusable stateful logic. Composables help in preventing repetition in writing functions that apply in multiple components. Just like components, Nuxt 3 auto imports composables created in this folder.
- `layouts`: provides a structure for your Vue.js pages. As your app complexity increases you may want to define different layouts for different pages or components. The layout folder holds your layout files and are automatically loaded via asynchronous import
- `middleware`: is custom functions that can be executed before rendering either a page or a group of pages (layout)
- `pages`: represent views for each specific route pattern. Every file in the **pages/** directory represents a different route displaying its content.
- `public`: is directly served at the server root and contains public files that have to keep their names (e.g. robots.txt) or likely won't change (e.g. favicon.ico).This is known as the static/ directory in Nuxt 2.
- `plugins`: contains JavaScript codes you want to execute before instantiating the root Vue.js Application. This is the place to add Vue plugins and inject functions or constants.
- `stores`: contains all your global state (Vuex/Pinia store files), and it is split into modules by default.

### Views

Nuxt provides several component layers to implement the user interface of your application.

#### `app.vue`

By default, Nuxt will treat this file as the entrypoint and render its content for every route of the application.

```vue
<template>
  <div>
    <h1>Welcome to the homepage</h1>
  </div>
</template>
```

#### Components

In Nuxt, creating these components in the `components/` directory, and they will be automatically available across your application without having to explicitly import them.

**app.vue**

```vue
<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert> This is an auto-imported component. </AppAlert>
  </div>
</template>
```

**components/AppAlert.vue**

```vue
<template>
  <span>
    <slot />
  </span>
</template>
```

#### Pages

Pages represent views for each specific route pattern. Every file in the `pages/` directory represents a different route displaying its content.

**pages/index.vue**

```vue
<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert> This is an auto-imported component </AppAlert>
  </div>
</template>
```

**pages/about.vue**

```vue
<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
  </section>
</template>
```

#### Layouts

Layouts are wrappers around pages that contain a common User Interface for several pages, such as a header and footer display.

**layouts/default.vue**

```vue [layouts/default.vue]
<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
```

**pages/index.vue**

```vue [pages/index.vue]
<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert> This is an auto-imported component </AppAlert>
  </div>
</template>
```

**pages/about.vue**

```vue [pages/about.vue]
<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
  </section>
</template>
```

### Assets

Nuxt uses two directories to handle assets like stylesheets, fonts or images.

- The `public/` directory content is served at the server root as-is.
- The `assets/` directory contains by convention every asset that you want the build tool (Vite or webpack) to process.

#### `public/` Directory

The public/ directory is used as a public server for static assets publicly available at a defined URL of your application.

**Example**: referencing an image file in the `public/img/` directory, available at the static URL `/img/nuxt.png`:

```vue
<template>
  <img src="/img/nuxt.png" alt="Discover Nuxt 3" />
</template>
```

#### `assets/` Directory

Nuxt uses Vite or webpack to build and bundle your application. The main function of these build tools is to process JavaScript files, but they can be extended through plugins (for Vite) or loaders (for webpack) to process other kind of assets, like stylesheets, fonts or SVG

**Example**: referencing an image file that will be processed if a build tool is configured to handle this file extension:

```vue
<template>
  <img src="~/assets/img/nuxt.png" alt="Discover Nuxt 3" />
</template>
```

### Routing

Nuxt routes are defined using file and directory names in the **pages/** directory. Pages are Vue components and can have any valid extension that Nuxt supports (by default **.vue**, **.js**, **.jsx**, **.mjs**, **.ts** or **.tsx**). Nuxt will automatically create a route for every page in your **~/pages/** directory.

For example, the file `/pages/products/banana.vue` will have the URL `https://www.domain.com/products/banana`.

#### Nested Routes

It is possible to display nested routes with <NuxtPage>.

<pre>
└── pages
    └── parent
    │   ├── child.vue
    │   └── index.vue (will match `/products`)
    └── parent.vue
</pre>

This file tree will generate these routes:

```ts
[
  {
    path: "/parent",
    component: "~/pages/parent.vue",
    name: "parent",
    children: [
      {
        path: "",
        component: "~/pages/parent/index.vue",
        name: "parent-index",
      },
      {
        path: "child",
        component: "~/pages/parent/child.vue",
        name: "parent-child",
      },
    ],
  },
];
```

To display the child.vue component, you have to insert the `<NuxtPage>` component inside pages/parent.vue:

```vue
<template>
  <div>
    <h1>I am the parent view</h1>
    <NuxtPage />
  </div>
</template>
```

#### Dynamic Routes

If you place anything within square brackets, it will be turned into a dynamic route parameter. You can mix and match multiple parameters and even non-dynamic text within a file name or directory.

**Example:**

- Dynamic on files

<pre>
└── pages
    └── carts
        ├── [id].vue (will match `/carts/1` , `/carts/2`, ...)
        └── index.vue (will match `/carts`)
</pre>

- Dynamic on folders

<pre>
└── pages
    └── products
        ├── [id]
        │   ├── categories
        │   │   ├── [id].vue (will match `/products/1/categories/1`, `/products/1/categories/2`, ...)
        │   │   └── index.vue (will match `/products/1/categories`, `/products/2/categories`, ...)
        │   └── index.vue (will match `/products/1`, `/products/2`, ... )
        └── index.vue (will match `/products`)
</pre>

- Dynamic on folder name

<pre>
└── pages
    └── users-[group]
        └── index.vue (will match `/users-admins`, `/users-staff`, ...)
</pre>

If you want a parameter to be optional, you must enclose it in double square brackets.

**Example:**

<pre>
└── pages
    └── [[slug]] (will match `/test`, `/carts`, ...)
        └── index.vue (will match `/`)
</pre>

#### Navigation

The `<NuxtLink>` component links pages between them. It renders an `<a>` tag with the href attribute set to the route of the page. Once the application is hydrated, page transitions are performed in JavaScript by updating the browser URL. This prevents full-page refreshes and allows for animated transitions.

**Example**:

```vue
<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
        <li><NuxtLink to="/products/1">Products 1</NuxtLink></li>
        <li><NuxtLink to="/products/2">Products 2</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
```

#### Route Middleware

There are three kinds of route middleware:

1.  Anonymous (or inline) route middleware, which are defined directly in the pages where they are used.
2.  Named route middleware, which are placed in the **middleware/** directory and will be automatically loaded via asynchronous import when used on a page. (Note: The route middleware name is normalized to kebab-case, so someMiddleware becomes some-middleware.)
3.  Global route middleware, which are placed in the **middleware/** directory (with a .global suffix) and will be automatically run on every route change.

#### Route Validation

Nuxt offers route validation via the validate property in definePageMeta in each page you wish to validate.

**Example**: allow only numbers.

```vue
<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return /^\d+$/.test(route.params.id);
  },
});
</script>
```

### Data fetching

Nuxt comes with two composables and a built-in library to perform data-fetching in browser or server environments: useFetch, useAsyncData and $fetch. By default, data fetching composables will perform their asynchronous function on both client and server environments.

**Example:**

```vue
<script setup lang="ts">
const { data: count } = await useFetch("/api/count");
</script>

<template>Page visits: {{ count }}</template>
```
