<template>
    <div class="w-full relative overflow-hidden flex items-center justify-center gap-2.5 text-center text-base text-black font-montserrat"
        style="font-family: 'Montserrat', sans-serif;">
        <div v-if="currentPage > 1"
            class="flex-1 overflow-hidden flex flex-col items-center justify-center p-2.5 cursor-pointer"
            @click="goToPrevious">
            <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.402754 11.0086C-0.134251 10.4507 -0.134251 9.54479 0.402754 8.98695L8.65114 0.418386C9.18815 -0.139462 10.0602 -0.139462 10.5972 0.418387C11.1343 0.976236 11.1343 1.88218 10.5972 2.44003L3.31976 10L10.593 17.56C11.13 18.1178 11.13 19.0238 10.593 19.5816C10.0559 20.1395 9.18385 20.1395 8.64685 19.5816L0.398457 11.0131L0.402754 11.0086Z"
                    fill="black" />
            </svg>

        </div>
        <div v-else class="flex-1 overflow-hidden flex flex-col items-center justify-center p-2.5">
        </div>
        <div class="flex-1 overflow-hidden flex items-center justify-center p-2.5 relative">
            <div class="absolute left-1/2 transform -translate-x-1/2">{{ currentPage }}/5</div>
            <button 
                v-if="showSkip"
                @click="$emit('skip')"
                class="skip-text absolute"
                style="right: 0;"
            >
                Salta
            </button>
        </div>
        <div v-if="currentPage < 5"
            class="flex-1 overflow-hidden flex flex-col items-center justify-center p-2.5 cursor-pointer"
            @click="goToNext">
            <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.5972 8.99141C11.1343 9.54926 11.1343 10.4552 10.5972 11.0131L2.34886 19.5816C1.81185 20.1395 0.939758 20.1395 0.402753 19.5816C-0.134251 19.0238 -0.134251 18.1178 0.402753 17.56L7.68024 10L0.407049 2.44003C-0.129955 1.88218 -0.129955 0.976236 0.407049 0.418387C0.944054 -0.139462 1.81615 -0.139462 2.35315 0.418387L10.6015 8.98695L10.5972 8.99141Z"
                    fill="black" />
            </svg>
        </div>
        <div v-else class="flex-1 overflow-hidden flex flex-col items-center justify-center p-2.5 cursor-pointer">
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{
    currentPage: number
    showSkip?: boolean
}>()

defineEmits<{
    skip: []
}>()

const router = useRouter()

function goToPrevious() {
    if (props.currentPage > 1) {
        router.push(`/tutorial${props.currentPage - 1}`)
    }
}

function goToNext() {
    if (props.currentPage < 5) {
        router.push(`/tutorial${props.currentPage + 1}`)
    }
}
</script>

<style scoped>
.skip-text {
    font-size: 12px;
    color: #003027;
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    text-decoration: underline;
    padding: 0;
    transition: opacity 0.2s;
}

.skip-text:active {
    opacity: 0.7;
}
</style>