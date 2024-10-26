<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  position:  String as PropType<'top' | 'bottom'>,
})
</script>

<template>
  <section class="top-sticky-area" :style="{
    top: props.position === 'top' ? '0' : 'auto',
    bottom: props.position === 'bottom' ? '0' : 'auto',
  }">
    <slot />
  </section>
</template>

<style scoped>
.top-sticky-area {
  position: sticky;
  left: 0;
  right: 0;
}
</style>
