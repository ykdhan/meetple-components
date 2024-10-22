<script setup lang="ts">
import RequestMatchModal from '@/modals/RequestMatchModal.vue'

type ModalType = 'request-match' | null

// TODO: pinia store 사용
const activeModal = 'request-match'
const data = {name: '트럼프'}

const onClickDim = () => {
  if (activeModal === null) return;
  // TODO: activeModal을 null로 변경
}
</script>

<template>
  <section class="modal-area" :class="{ dimmed: activeModal !== null}" @click="onClickDim">
    <RequestMatchModal v-if="activeModal === 'request-match'" :data="data" />
  </section>
</template>

<style scoped>
.modal-area {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  transition: background-color .5s;
  pointer-events: none;
}
.modal-area.dimmed {
  background: rgba(0, 0, 0, .7);
  pointer-events: auto;
}
</style>
