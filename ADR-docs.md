### Context and Problem Statement

...

### Why NuxtJS

...

### Considered Options

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

#### Directory structure

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
  - Images that won't be served from the public/ directory.
- `components`: is where you put all your Vue components which can then be imported inside your pages or other components. Nuxt automatically imports any components in your _components/_ directory.
- `composables`: is functions that leverage Vue.js composition API to create reusable stateful logic. Composables help in preventing repetition in writing functions that apply in multiple components. Just like components, Nuxt 3 auto imports composables created in this folder.
- `layouts`: provides a structure for your Vue.js pages. As your app complexity increases you may want to define different layouts for different pages or components. The layout folder holds your layout files and are automatically loaded via asynchronous import
- `middleware`: is custom functions that can be executed before rendering either a page or a group of pages (layout)
- `pages`: represent views for each specific route pattern. Every file in the _pages/_ directory represents a different route displaying its content.
- `public`: is directly served at the server root and contains public files that have to keep their names (e.g. robots.txt) or likely won't change (e.g. favicon.ico).This is known as the static/ directory in Nuxt 2.
- `plugins`: contains JavaScript codes you want to execute before instantiating the root Vue.js Application. This is the place to add Vue plugins and inject functions or constants.
- `stores`: contains all your global state (Vuex/Pinia store files), and it is split into modules by default.
