<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import ModalArea from '@/components/ModalArea.vue'

const profileImageUrl = 'https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg'

const activeModal = "request-match"

</script>

<template>
  <Header :image-url="profileImageUrl" />
  <RouterView />
  <ModalArea :activeModal="activeModal" />
</template>

<style scoped>
</style>
