<script setup lang="ts">
import IcMainLogo from '@/components/icons/IcMainLogo.vue'
import SubmitButton from '@/components/SubmitButton.vue'
import { onMounted, onUnmounted } from 'vue'

let timeout = 0

const resizeBackground = () => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    const background = document.querySelector('.background') as HTMLImageElement
    const banner = document.querySelector('.banner') as HTMLElement

    if (banner.clientWidth / banner.clientHeight < 375 / 910) {
      background.classList.add('height')
    } else {
      background.classList.remove('height')
    }
  }, 150)
}

onMounted(() => {
  resizeBackground()
  window.addEventListener('resize', resizeBackground)
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeBackground)
})
</script>

<template>
  <div class="banner">
    <div class="container">
      <span class="subtitle">내 친구들과 함께 만나는 미팅 매칭</span>
      <IcMainLogo />
    </div>
    <SubmitButton>서비스 시작하기</SubmitButton>
    <img src="@/assets/images/background.png" class="background" alt="" />
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  background-color: #EAE1FF;
  padding: 25px 16px;
  box-sizing: border-box;
  overflow: hidden;
}
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.subtitle {
  width: fit-content;
  font-size: 16px;
  font-weight: 700;
  color: transparent;
  background: linear-gradient(to right, #6726FE, #ED2EBA);
  background-clip: text;
  -webkit-background-clip: text;
  margin-bottom: 2px;
}
.submit-button {
  margin-top: 40px;
  height: 63px;
  border-radius: 63px;
  box-shadow: 0 9px 20px 0 rgba(0, 0, 0, .45);
  z-index: 1;
}
.background {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 100%;
  height: auto;
  min-height: 910px;
  object-fit: cover;
  object-position: center;
  z-index: 0;
}
.background.height {
  width: auto;
  height: 100%;
}
</style>
