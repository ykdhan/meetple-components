<script setup lang="ts">
import IcClose from '@/components/icons/IcGrayClose.vue'
import IcHeart from '@/components/icons/IcHeart.vue'

const props = defineProps({
  onClickClose: Function,
  onClickHeart: Function
})
</script>

<template>
  <div class="floating-action-buttons">
    <button @click="props.onClickClose">
      <IcClose />
    </button>
    <div class="division" />
    <button @click="props.onClickHeart">
      <IcHeart :style="{width: '50px', height: '50px'}" color="#7542FD"  />
    </button>
  </div>
</template>

<style scoped>
.floating-action-buttons {
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 32px;
  background-color: #fff;
  border: 1px solid #F0F0F0;
  border-radius: 48px;
  box-shadow: 0 4px 49px 0 rgba(0, 0, 0, .11);
}
.division {
  position: relative;
  height: 80px;
  width: 2px;
  background-color: #FFF;
  border-left: 2px solid #F0F0F0;
  margin: 0 28px;
}
.division::before {
  content: '';
  display: block;
  position: absolute;
  left: 100%;
  top: 0;
  bottom: 0;
  width: 32px;
  background: linear-gradient(90deg, #F7F7F7 0%, #FFFFFF 100%);
  z-index: -1;
}
</style>
