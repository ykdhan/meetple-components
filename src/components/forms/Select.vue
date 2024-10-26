<script setup lang="ts">
import { type PropType } from 'vue'
import IcGrayArrow from '@/components/icons/IcGrayArrow.vue'

const props = defineProps({
  label: String,
  required: Boolean,
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
</script>

<template>
  <label v-if="props.label">{{props.label}}
    <span class="required" v-if="props.required">*</span>
    <span v-else>(선택사항)</span>
  </label>
  <div class="container">
    <select class="select" :value="props.value" @change="(e) => props.onChange(e.target.value)">
      <option :key="index" v-for="(option, index) in props.options" :value="option.value">{{option.label}}</option>
    </select>
    <div class="arrow">
      <IcGrayArrow />
    </div>
  </div>
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
  width: -webkit-fill-available;
  padding: 16px;
  font-size: 16px;
  border: 1px solid #EAEAEA;
  border-radius: 8px;
}
.select:focus {
  border-color: #6726FE;
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
</style>
