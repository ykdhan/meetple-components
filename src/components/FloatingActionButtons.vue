<script setup lang="ts">
</script>

<template>
  <div class="floating-action-buttons">
    <slot></slot>
  </div>
</template>

<style scoped>
.floating-action-buttons {
  padding: 24px;
  border: 1px solid #F4F4F4;
  border-radius: 20px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, .06);
}
</style>
