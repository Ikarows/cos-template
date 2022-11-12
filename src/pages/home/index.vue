<template>&nbsp;</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { login } from '@/api'

onMounted(() => {
  login().then(res => {
    console.log(res)
  })
})
</script>

<style scoped></style>
