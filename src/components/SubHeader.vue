<script setup lang="ts">
import MoreButton from '@/components/buttons/MoreButton.vue'
import BackButton from '@/components/buttons/BackButton.vue'
import ActionButton from '@/components/buttons/ActionButton.vue'
import CloseButton from '@/components/buttons/CloseButton.vue'
import type { PropType } from 'vue'

const props = defineProps({
  title: String,
  onClickBack: Function,
  onClickClose: Function,
  moreButtonData: Object,
  actionButtonData: Object as PropType<{title: string, onClick: () => void}>
})
</script>

<template>
  <header class="header">
    <div class="left">
      <BackButton @click="props.onClickBack" v-if="!!props.onClickBack" />
    </div>
    <h1>{{props.title}}</h1>
    <div class="right">
      <MoreButton :options="props.moreButtonData" v-if="!!props.moreButtonData" />
      <ActionButton :title="props.actionButtonData?.title"
                    @click="props.actionButtonData?.onClick"
                    v-if="!!props.actionButtonData" />
      <CloseButton @click="props.onClickClose" v-if="!!props.onClickClose" />
    </div>
  </header>
</template>

<style scoped>
.header {
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px 16px;
  min-height: 38px;
}
.left {
  display: flex;
  justify-content: flex-start;
  flex: 1;
}
.right {
  display: flex;
  justify-content: flex-end;
  flex: 1;
}
h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: 600;
  color: #000;
}
</style>
