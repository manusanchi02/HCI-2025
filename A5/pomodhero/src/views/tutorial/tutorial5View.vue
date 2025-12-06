<template>
    <TutorialWrapper :current-page="5">
        <div
            class="w-full flex-1 flex flex-col items-center justify-center py-[30px] px-[21px] box-border gap-2.5 text-center text-2xl text-black font-montserrat"
            style="font-family: 'Montserrat', sans-serif; background-color: #F2F4F2;">
            <div class="w-[78px] flex-1 relative overflow-hidden" />
            <img class="w-[242px] relative max-h-full object-cover" alt="" />
            <div class="w-[108px] h-[66px] relative overflow-hidden shrink-0" />
            <div class="self-stretch relative font-medium">Sei pronto ad unirti agli eroi del cibo?</div>
            <div
                class="self-stretch overflow-hidden flex flex-col items-center justify-center py-5 px-0 gap-2.5 text-3xl text-white">
                <div
                    class="self-stretch px-32 py-4 bg-emerald-950 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
                    @click="goToLogin">
                    <div class="text-center justify-center text-white text-3xl font-semibold font-['Montserrat'] leading-7">
                        Accedi</div>
                </div>
                <div
                    class="self-stretch px-32 py-4 bg-white rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
                    @click="goToHome">
                    <div class="text-center justify-center text-black text-2xl font-semibold font-['Montserrat'] leading-7 whitespace-nowrap">
                        Entra come ospite</div>
                </div>
            </div>
            <div class="w-16 flex-1 relative overflow-hidden" />
        </div>
    </TutorialWrapper>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import TutorialWrapper from '../../components/TutorialWrapper.vue'
import { setTutorialCompleted } from '../../utils/storage'

const router = useRouter()

function goToLogin() {
    setTutorialCompleted()
    router.push('/login')
}

function goToHome() {
    setTutorialCompleted()
    router.push('/')
}
</script>