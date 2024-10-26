<script setup lang="ts">
import Modal from '@/components/Modal.vue'
import CloseButton from '@/components/buttons/CloseButton.vue'
import Button from '@/components/Button.vue'
import type { PropType } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  selected: String,
  data: {
    type: Array as PropType<{ label: string, value: string }[]>,
    required: true,
  },
  onSelect: {
    type: Function as PropType<(value: string) => void>,
    required: true,
  },
  onClose: {
    type: Function as PropType<() => void>,
    required: true,
  },
  numCols: {
    type: Number,
    default: 2,
  },
})
</script>

<template>
  <Modal :style="{paddingTop: '40px', paddingBottom: '40px'}">
    <p class="title">{{props.title}}</p>
    <ul class="list" :style="{ gridTemplateColumns: `repeat(${numCols}, 1fr)`}">
      <li v-for="(item, index) in props.data" :key="index">
        <Button @click="() => props.onSelect(item.value)" :class="{selected: props.selected === item.value}">{{item.label}}</Button>
      </li>
    </ul>
    <CloseButton class="close" @click="props.onClose" />
  </Modal>
</template>

<style scoped>
.title {
  display: block;
  font-size: 23px;
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;
}
.list {
  display: grid;
  gap: 8px;
}
.list .button {
  width: 100%;
  height: 40px;
  border-radius: 6px;
  justify-content: center;
}
.list .button.selected {
  border-color: #6726FE;
  color: #6726FE;
}
.close {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 13px;
  right: 13px;
}
</style>
