<script setup lang="ts">
const props = defineProps({
  disabled: Boolean,
})
</script>

<template>
  <button class="submit-button" :disabled="props.disabled">
    <slot />
  </button>
</template>

<style scoped>
.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  border-radius: 26px;
  font-size: 17px;
  font-weight: 700;
  background-color: #000;
  border: none;
  color: #fff;
}
.submit-button:disabled {
  background-color: #C8C8C8 !important;
}
</style>
