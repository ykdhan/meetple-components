<script setup lang="ts">
import { RouterView } from 'vue-router'
import ModalArea from '@/components/ModalArea.vue'

const activeModal = "request-match"
</script>

<template>
  <RouterView />
  <ModalArea :activeModal="activeModal" />
</template>

<style scoped>
</style>
