<script setup lang="ts">
import RequestMatchModal from '@/modals/RequestMatchModal.vue'
import RejectMatchModal from '@/modals/RejectMatchModal.vue'
import MatchedModal from '@/modals/MatchedModal.vue'
import BlockPartnerModal from '@/modals/BlockPartnerModal.vue'
import DeletePartnerModal from '@/modals/DeletePartnerModal.vue'
import LogoutModal from '@/modals/LogoutModal.vue'
import DeleteAccountModal from '@/modals/DeleteAccountModal.vue'
import PurchasePointModal from '@/modals/PurchasePointModal.vue'

type ModalType = 'request-match' | 'reject-match' | 'matched' | 'block-partner' | 'delete-partner' |
  'logout' | 'delete-account' | 'purchase-point' | null;

// TODO: pinia store 사용
const activeModal = null;

const data = {
  name: '트럼프',
  onClickSubmit: () => {},
  onClickCancel: () => {}
}
const data2 = {
  name: '트럼프',
  partnerProfileImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg',
  myProfileImageUrl: 'https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg',
  onClickSubmit: () => {}
}
const data3 = {
  point: 15,
  onClickSubmit: () => {},
  onClickCancel: () => {}
}

const onClickDim = () => {
  if (activeModal === null) return;
  // TODO: activeModal을 null로 변경
}
</script>

<template>
  <section class="modal-area" :class="{ dimmed: activeModal !== null}" @click="onClickDim">
    <RequestMatchModal v-if="activeModal === 'request-match'" :data="data" />
    <RejectMatchModal v-if="activeModal === 'reject-match'" :data="data" />
    <MatchedModal v-if="activeModal === 'matched'" :data="data2" />
    <BlockPartnerModal v-if="activeModal === 'block-partner'" :data="data" />
    <DeletePartnerModal v-if="activeModal === 'delete-partner'" :data="data" />
    <LogoutModal v-if="activeModal === 'logout'" :data="data" />
    <DeleteAccountModal v-if="activeModal === 'delete-account'" :data="data" />
    <PurchasePointModal v-if="activeModal === 'purchase-point'" :data="data3" />
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
