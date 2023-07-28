export default defineNuxtRouteMiddleware((to, from) => {
  console.log('global')
  console.log(to)
  console.log(from)
  console.log('-----------')
  //
})
