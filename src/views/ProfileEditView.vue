<script setup lang="ts">
import AlertBanner from '@/components/AlertBanner.vue'
import ButtonWithDetail from '@/components/buttons/ButtonWithDetail.vue'
import Gap from '@/components/Gap.vue'
import StickyArea from '@/components/StickyArea.vue'
import SubHeader from '@/components/SubHeader.vue'
import TextInput from '@/components/forms/TextInput.vue'
import TextArea from '@/components/forms/TextArea.vue'
import Select from '@/components/forms/Select.vue'
import { TEST_ACTION_DATA, TEST_SELECT_OPTIONS } from '@/consts/testData'
import { ref } from 'vue'

const name = ref('')
const school = ref('')
const introduction = ref('')
const mbti = ref('ESTJ')
</script>

<template>
  <StickyArea position="top" :style="{ backgroundColor: '#fff'}">
    <SubHeader title="프로필" :action-button-data="TEST_ACTION_DATA" />
  </StickyArea>
  <div class="page">
    <TextInput label="이름" :required="true" :on-change="(val: string) => { name = val}" :value="name" />
    <Gap :height="20" />
    <TextInput label="학교명" :on-change="(val: string) => { school = val}" :value="school" />
    <Gap :height="20" />
    <TextArea label="자개소개" :required="true" :on-change="(val: string) => introduction = val" :value="introduction" />
    <Gap :height="20" />
    <TextArea question="나와 내 친구들은 어떤 사람인가요?" :on-change="(val: string) => introduction = val" :value="introduction" :num-lines="6" :max-length="120" />
    <Gap :height="20" />
    <Select label="MBTI" :required="true" :on-change="(val: string) => mbti = val" :value="mbti" :options="TEST_SELECT_OPTIONS" />
    <Gap :height="20" />
    <AlertBanner title="카카오톡 오픈 프로필을 등록해주세요." description="링크된 상대방과 대화할 수 있습니다." />
    <Gap :height="20" />
    <ButtonWithDetail title="회원탈퇴" title-color="#FF334B" description="지금 바로 고고" />
  </div>
</template>

<style>
.page {
  padding: 16px;
}
</style>
