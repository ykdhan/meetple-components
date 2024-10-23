<script setup lang="ts">
import Tabs from '@/components/Tabs.vue'
import MyProfile from '@/components/MyProfile.vue'
import MyPoint from '@/components/MyPoint.vue'

const tabs = [
  { title: '추천', to: '#' },
  { title: '매칭', content: '#' },
]

const user = {
  name: '일론',
  message: '쏘맥 고?',
  age: 26,
  job: '테슬라 CEO',
  mbti: 'ENTJ',
  location: '서울특별시',
  school: '한양대학교',
  profile_image_url: 'https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg'
}
</script>

<template>
  <div class="page">
    <Tabs :tabs="tabs" :current-index="1" />
    <MyProfile :name="user.name" :message="user.message" :image-url="user.profile_image_url" />
    <MyPoint :point="1525" :on-click-charge="() => {}" />
  </div>
</template>

<style>
.page {
  padding: 56px 16px;
}
</style>
