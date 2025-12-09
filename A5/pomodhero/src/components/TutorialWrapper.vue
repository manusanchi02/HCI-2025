<template>
  <div 
    class="tutorial-wrapper"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <slot></slot>
    
    <TutorialNavBar :current-page="currentPage" :show-skip="currentPage < 5" @skip="skipTutorial" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TutorialNavBar from './TutorialNavBar.vue'

const props = defineProps<{
  currentPage: number
}>()

const router = useRouter()
const touchStartX = ref(0)
const touchEndX = ref(0)

function handleTouchStart(e: TouchEvent) {
  touchStartX.value = e.changedTouches[0].screenX
}

function handleTouchEnd(e: TouchEvent) {
  touchEndX.value = e.changedTouches[0].screenX
  handleSwipe()
}

function handleSwipe() {
  const swipeThreshold = 50
  const diff = touchStartX.value - touchEndX.value
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0 && props.currentPage < 5) {
      // Swipe left - go to next
      router.push(`/tutorial${props.currentPage + 1}`)
    } else if (diff < 0 && props.currentPage > 1) {
      // Swipe right - go to previous
      router.push(`/tutorial${props.currentPage - 1}`)
    }
  }
}

function skipTutorial() {
  router.push('/tutorial5')
}
</script>

<style scoped>
.tutorial-wrapper {
  width: 100%;
  height: 100vh;
  background-color: #F2F4F2;
  padding-bottom: 1.875rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
