<script setup lang="ts">
import IcLogo from '@/components/icons/IcLogo.vue'
import NotificationButton from '@/components/buttons/NotificationButton.vue'
import UserProfileButton from '@/components/buttons/UserProfileButton.vue'
import MoreButton from '@/components/buttons/MoreButton.vue'
import BackButton from '@/components/buttons/BackButton.vue'

const props = defineProps({
  imageUrl: String,
  showBackButton: Boolean,
  onClickBack: Function,
  showNotificationButton: Boolean,
  hasUnreadNotification: Boolean,
  onClickNotification: Function,
  showProfileButton: Boolean,
  onClickProfile: Function,
  showMoreButton: Boolean,
  onClickMore: Function,
  moreButtonData: Object
})
</script>

<template>
  <header class="header">
    <div class="logo-wrapper">
      <BackButton @click="onClickBack" v-if="props.showBackButton" />
      <IcLogo v-else />
    </div>
    <NotificationButton :showIndicator="props.hasUnreadNotification" @click="props.onClickNotification" v-if="props.showNotificationButton" />
    <UserProfileButton :imageUrl="props.imageUrl" @click="props.onClickProfile" v-if="props.showProfileButton" />
    <MoreButton :options="props.moreButtonData" v-if="props.showMoreButton" />
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
