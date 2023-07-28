export default defineNuxtRouteMiddleware((to, from) => {
  console.log('guard tsx')
  console.log(to)
  console.log(from)
  console.log('-----------')
  //
})
