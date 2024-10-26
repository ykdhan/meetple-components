<script setup lang="ts">
import { type PropType, ref } from 'vue'
import IcClear from '@/components/icons/IcClear.vue'

const props = defineProps({
  label: String,
  placeholder: String,
  required: Boolean,
  value: {
    type: String,
    required: true,
  },
  onChange: {
    type: Function as PropType<(value: string) => void>,
    required: true,
  }
})

const input = ref<HTMLInputElement | null>(null);

const focused = ref(false);

const onClear = () => {
  if (input.value) {
    input.value.value = '';
    props.onChange('');
  }
}

const onFocus = () => {
  focused.value = true
}

const onBlur = () => {
  setTimeout(() => {
    focused.value = false;
  }, 100)
}
</script>

<template>
  <label v-if="props.label">{{label}}
    <span class="required" v-if="props.required">*</span>
    <span v-else>(선택사항)</span>
  </label>
  <div class="container">
    <input
      ref="input"
      class="text-input"
      :value="props.value"
      @input="(e) => props.onChange(e.target.value)"
      @focus="onFocus"
      @blur="onBlur"
    />
    <button class="clear" @click="onClear" v-if="focused">
      <IcClear />
    </button>
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
.text-input {
  width: -webkit-fill-available;
  padding: 16px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #EAEAEA;
  border-radius: 8px;
}
.text-input:focus {
  border-color: #6726FE;
}
.clear {
  position: absolute;
  top: 50%;
  right: 16px;
  display: inline-flex;
  transform: translateY(-50%);
}
</style>
