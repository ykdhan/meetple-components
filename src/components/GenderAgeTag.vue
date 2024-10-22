<script setup lang="ts">
import IcMale from '@/components/icons/IcMale.vue'
import IcFemale from '@/components/icons/IcFemale.vue'

const props = defineProps({
  gender: String,
  age: Number
})
</script>

<template>
  <div class="gender-age-tag">
    <IcMale v-if="props.gender === 'male'" />
    <IcFemale v-else />
    <span class="label" :class="props.gender">{{ props.gender === 'male' ? '남자' : '여자' }}</span>
    <span class="label" :class="props.gender">{{ props.age }}세</span>
  </div>
</template>

<style scoped>
.gender-age-tag {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.label {
  font-size: 14px;
  font-weight: 600;
}
.label.male {
  color: #3B82F6;
}
.label.female {
  color: #F742AF;
}
</style>
