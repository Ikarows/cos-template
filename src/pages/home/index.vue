<template></template>

<script lang="ts" setup>
import { login } from '@/api'
import { onMounted } from 'vue'

onMounted(() => {
  login().then(res => {
    console.log(res)
  })
})
</script>

<style scoped></style>
