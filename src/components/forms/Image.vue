<script setup lang="ts">
import { ref } from 'vue'
import IcImage from '@/components/icons/IcImage.vue'
import Button from '@/components/Button.vue'

const props = defineProps({
  label: String,
  required: Boolean,
  onChange: {
    type: Function,
    required: true,
  }
})

const input = ref<HTMLInputElement>()
const image = ref<HTMLImageElement>()
const selected = ref(false)

const onImageChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      if (image.value) {
        selected.value = true
        image.value.src = e.target?.result as string
      }
      props.onChange(e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }
}
</script>

<template>
  <label v-if="props.label">{{props.label}}
    <span class="required" v-if="props.required">*</span>
    <span v-else>(선택사항)</span>
  </label>
  <div class="container">
    <input
      ref="input"
      class="input"
      type="file"
      @change="onImageChange"
    />
    <img ref="image" class="thumbnail" :class="{ active: selected }" src="" alt="Thumbnail" />
    <Button class="button" :onClick="() => input?.click()">
      <IcImage width="24" height="24" />
      <span>이미지 교체하기</span>
    </Button>
  </div>
</template>

<style scoped>
label {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 700;
  color: #2A2A2A;
  margin-bottom: 8px;
}
label > span {
  font-size: 13px;
  font-weight: 600;
  color: #9B9B9B;
}
label > span.required {
  color: #FF334B;
}
.thumbnail {
  display: none;
  width: 100%;
  height: 330px;
  border-radius: 16px;
  object-fit: cover;
}
.thumbnail.active {
  display: block;
}
.container {
  position: relative;
}
.input {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  opacity: 0;
}
.button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
  height: 44px;
  padding: 0 16px;
  margin: 15px auto 0;
  border-radius: 22px;
}
.button span {
  font-size: 14px;
  font-weight: 600;
  color: #000;
}
</style>
