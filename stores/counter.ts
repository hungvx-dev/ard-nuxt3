export const useCounter = defineStore('counter', {
  state: () => ({
    counter: 1,
    theme: 'light'
  }),

  getters: {
    double: state => state.counter * 2
  },

  actions: {
    increment (amount = 1) {
      this.counter += amount
      console.log(this.counter)
    },
    decrease (amount = 1) {
      this.counter -= amount
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
}
