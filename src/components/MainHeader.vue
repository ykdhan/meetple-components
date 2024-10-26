<script setup lang="ts">
import IcLogo from '@/components/icons/IcLogo.vue'
import NotificationButton from '@/components/buttons/NotificationButton.vue'
import UserProfileButton from '@/components/buttons/UserProfileButton.vue'

const props = defineProps({
  imageUrl: String,
  hasUnreadNotification: Boolean,
  onClickNotification: Function,
  onClickProfile: Function,
})
</script>

<template>
  <header class="header">
    <div class="logo-wrapper">
      <IcLogo />
    </div>
    <NotificationButton :showIndicator="props.hasUnreadNotification" @click="props.onClickNotification" />
    <UserProfileButton :imageUrl="props.imageUrl" @click="props.onClickProfile" />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 5px 16px;
}
.logo-wrapper {
  display: flex;
  flex: 1;
}
</style>
