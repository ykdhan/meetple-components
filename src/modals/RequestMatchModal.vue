<script setup lang="ts">
import type { PropType } from 'vue'
import Modal from '@/components/Modal.vue'
import SubmitButton from '@/components/SubmitButton.vue'
import CancelButton from '@/components/CancelButton.vue'

type ModalType = 'test'

const props = defineProps({
  activeModal: String as PropType<ModalType>,
  data: Object,
})
</script>

<template>
  <Modal>
    <span class="title">{{props.data?.name}}님께 매칭을 요청할까요?</span>
    <p class="description">매칭이 성사되는 경우 100포인트가 사용됩니다.</p>
    <SubmitButton :style="{backgroundColor: '#6751FF'}" @click="() => {}">매칭 요청하기</SubmitButton>
    <CancelButton :style="{marginTop: '20px'}" @click="() => {}">취소하기</CancelButton>
  </Modal>
</template>

<style scoped>
.title {
  font-size: 24px;
  font-weight: 700;
  color: #000;
}
.description {
  margin-top: 8px;
  margin-bottom: 40px;
  font-size: 14px;
  font-weight: 500;
  color: #6726FE;
}
</style>
