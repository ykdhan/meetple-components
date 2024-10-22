<script setup lang="ts">
import IcLogo from '@/components/icons/IcLogo.vue'
import NotificationButton from '@/components/buttons/NotificationButton.vue'
import UserProfileButton from '@/components/buttons/UserProfileButton.vue'

const props = defineProps({
  imageUrl: String,
})
</script>

<template>
  <header class="header">
    <div class="logo-wrapper">
      <IcLogo />
    </div>
    <NotificationButton />
    <UserProfileButton :imageUrl="props.imageUrl" />
  </header>
</template>

<style scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 5px 16px;
  background-color: #fff;
}
.logo-wrapper {
  display: flex;
  flex: 1;
}
</style>
