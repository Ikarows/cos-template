<template>
  <router-view></router-view>
  <HelloWorld msg="Vite + Vue" />
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'

import {userIndex} from '@/store'
const store = userIndex()
console.log('store.demo', store.demo)
</script>

<style lang="scss" scoped></style>
