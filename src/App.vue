<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import ModalArea from '@/components/ModalArea.vue'

const profileImageUrl = 'https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg'

const activeModal = "request-match"

const moreButtonData = [
  {
    title: '삭제하기',
    onClick: () => {}
  },
  {
    title: '차단하기',
    warning: true,
    onClick: () => {}
  }
]
</script>

<template>
  <Header :image-url="profileImageUrl" :show-profile-button="true" :show-more-button="true" :more-button-data="moreButtonData" />
  <RouterView />
  <ModalArea :activeModal="activeModal" />
</template>

<style scoped>
</style>
