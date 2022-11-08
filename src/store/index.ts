import { defineStore } from 'pinia'

export const auth = defineStore('auth', {
  state: () => {
    return {
      token: ''
    }
  },

  getters: {},

  actions: {}
})
