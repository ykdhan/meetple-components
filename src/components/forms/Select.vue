<script setup lang="ts">
import { type PropType, ref } from 'vue'
import IcGrayArrow from '@/components/icons/IcGrayArrow.vue'
import SelectModal from '@/modals/SelectModal.vue'

const props = defineProps({
  label: String,
  required: Boolean,
  modalTitle: String,
  modalOptionCols: Number,
  options: {
    type: Array as PropType<{ label: string, value: string }[]>,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  onChange: {
    type: Function as PropType<(value: string) => void>,
    required: true,
  },
  maxLength: Number,
})

const open = ref(false);
</script>

<template>
  <label v-if="props.label">{{props.label}}
    <span class="required" v-if="props.required">*</span>
    <span v-else>(선택사항)</span>
  </label>
  <div class="container">
    <button class="select" @click="() => open = !open">
      <span>{{props.options.find(option => option.value === props.value)?.label}}</span>
      <div class="arrow">
        <IcGrayArrow />
      </div>
    </button>
  </div>
  <section class="modal-area" :class="{ dimmed: open}" @click="() => open = false">
    <SelectModal v-if="open"
                 :data="props.options"
                 :title="props.modalTitle || '선택해주세요'"
                 :selected="props.value"
                 :num-cols="props.modalOptionCols"
                 :on-select="props.onChange"
                 :on-close="() => open = false" />
  </section>
</template>

<style scoped>
.container {
  position: relative;
}
label {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 700;
  color: #2A2A2A;
  margin-bottom: 8px;
}
label > span {
  font-size: 13px;
  font-weight: 600;
  color: #9B9B9B;
}
label > span.required {
  color: #FF334B;
}
.select {
  width: 100%;
  padding: 16px;
  font-size: 16px;
  border: 1px solid #EAEAEA;
  border-radius: 8px;
  text-align: left;
}
.select:focus + .arrow svg {
  transform: rotate(-90deg);
}
.arrow {
  position: absolute;
  top: 50%;
  right: 16px;
  display: inline-flex;
  transform: translateY(-50%);
}
.arrow svg {
  transform: rotate(90deg);
}
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
