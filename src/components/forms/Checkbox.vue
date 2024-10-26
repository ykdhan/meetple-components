<script setup lang="ts">
import { type PropType } from 'vue'
import IcCheckActive from '@/components/icons/IcCheckActive.vue'
import IcCheck from '@/components/icons/IcCheck.vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  main: Boolean,
  value: {
    type: Boolean,
    required: true,
  },
  onChange: {
    type: Function as PropType<(value: boolean) => void>,
    required: true,
  },
  onClickDetail: Function,
})
</script>

<template>
  <div class="container">
    <input
      type="checkbox"
      :id="props.name"
      :checked="props.value"
      @change="() => props.onChange(!props.value)"
    />
    <label :for="props.name" :class="{main: props.main}">
      <IcCheckActive v-if="props.value" />
      <IcCheck v-else />
      {{props.title}}
    </label>
    <button @click="props.onClickDetail" v-if="!!props.onClickDetail">
    </button>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
}
input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
label {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  font-weight: 500;
  color: #777777;
  cursor: pointer;
}
label.main {
  font-weight: 700;
  color: #000;
}
</style>
