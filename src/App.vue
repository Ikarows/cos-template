<template>
  <router-view></router-view>
  <HelloWorld msg="Vite + Vue" />
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import type { Ref } from 'vue'
  import HelloWorld from '@/components/HelloWorld.vue'

  const arr = [{ id: 1, name: 111 }]

  interface Fors {
    id: number
    name: number | string
  }

  const num: Ref<number> = ref(0)
  console.log(num)

  arr.forEach((v: Fors, i: number) => {
    console.log(v.id, i)
  })
</script>

<style lang="scss" scoped></style>
