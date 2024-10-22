<script setup lang="ts">
const props = defineProps({
  color: String,
})
</script>

<template>
  <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25.5" cy="25.5" r="25.5" fill="white"/>
    <path d="M25.4999 37.2277L16.2723 28.4011L14.4267 26.6357C11.8786 24.1983 11.8786 20.2464 14.4267 17.809C16.9748 15.3715 21.1062 15.3715 23.6543 17.809L25.4999 19.5742L27.3455 17.8088C29.8936 15.3713 34.025 15.3714 36.5732 17.8088C39.1213 20.2462 39.1213 24.1982 36.573 26.6356L34.7276 28.401L30.7461 32.2094L30.4299 32.5119L24.5538 26.6357" :stroke="props.color" stroke-width="3.5" stroke-linecap="square"/>
    <rect x="26.2366" y="13.7723" width="6.48106" height="2.96691" transform="rotate(45 26.2366 13.7723)" fill="white"/>
  </svg>
</template>
