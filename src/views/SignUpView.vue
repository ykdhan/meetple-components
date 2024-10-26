<script setup lang="ts">
import StickyArea from '@/components/StickyArea.vue'
import SubHeader from '@/components/SubHeader.vue'
import PhoneNumberInput from '@/components/forms/PhoneNumberInput.vue'
import CodeInput from '@/components/forms/CodeInput.vue'
import PageTitleAndDescription from '@/components/PageTitleAndDescription.vue'
import Gap from '@/components/Gap.vue'
import { ref } from 'vue'

const phoneNumber = ref('')
const code = ref('')
</script>

<template>
  <StickyArea position="top" :style="{ backgroundColor: '#fff'}">
    <SubHeader title="회원가입" />
  </StickyArea>
  <div class="page">
    <PageTitleAndDescription title="휴대폰 번호를 입력하세요" description="필수입니다" />
    <Gap :height="40" />
    <PhoneNumberInput
      :on-change="(val: string) => phoneNumber = val"
      :value="phoneNumber"
    />
    <Gap :height="20" />
    <CodeInput
      :on-change="(val: string) => code = val"
      :value="code"
    />
  </div>
</template>

<style>
.page {
  padding: 16px;
}
</style>
