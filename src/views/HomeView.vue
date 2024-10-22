<script setup lang="ts">
import Tabs from '@/components/Tabs.vue'
import UserProfileInfo from '@/components/UserProfileInfo.vue'
import Questions from '@/components/Questions.vue'
import Empty from '@/components/Empty.vue'
import MatchingStatus from '@/components/MatchingStatus.vue'

const tabs = [
  { title: '추천', to: '#' },
  { title: '매칭', content: '#' },
]

const user = {
  name: '일론',
  message: '쏘맥 고?',
  gender: 'male',
  age: 26,
  job: '테슬라 CEO',
  mbti: 'ENTJ',
  location: '서울특별시',
  school: '한양대학교',
  profile_image_url: 'https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg'
}

const questions = [
  {
    question: '좋아하는 음식은 무엇인가요?',
    answer: '피자'
  },
  {
    question: '좋아하는 취미는 무엇인가요?',
    answer: '로켓 만들기'
  },
  {
    question: '좋아하는 동물은 무엇인가요?',
    answer: '개'
  }
]
</script>

<template>
  <div class="page">
    <Tabs :tabs="tabs" :current-index="0" />
    <MatchingStatus status="waiting" />
    <MatchingStatus status="matched" />
    <UserProfileInfo
      :name="user.name"
      :message="user.message"
      :gender="user.gender"
      :age="user.age"
      :job="user.job"
      :mbti="user.mbti"
      :location="user.location"
      :school="user.school"
      :image-url="user.profile_image_url"
    />
    <Questions :data="questions"/>
    <Empty title="추천 매칭 준비중" description="추천될 매칭이 준비중에 있어요! 매칭이 도착하면 알려드릴께요." />
  </div>
</template>

<style>
.page {
  padding: 56px 16px;
}
</style>
