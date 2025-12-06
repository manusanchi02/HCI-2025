<template>
    <TutorialWrapper :current-page="4">
        <div
            class="w-full flex-1 flex flex-col items-center justify-center py-[30px] px-[21px] box-border gap-2.5 text-center text-2xl text-black font-montserrat"
            style="font-family: 'Montserrat', sans-serif; background-color: #F2F4F2;">
        <div class="w-[78px] flex-1 relative overflow-hidden" />
        <div class="self-stretch relative">
            <span class="font-semibold">Gestisci gli imprevisti </span>
            <span>vendendo gli alimenti </span>
        </div>
        <div class="w-14 h-14 bg-amber-400 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden">
            <img src="../../assets/images/sell.svg" class="w-7 h-6"></img>
        </div>
        <div class="w-[67px] h-[47px] relative overflow-hidden shrink-0" />
        <div class="self-stretch relative">o facendoli ridistribuire in modo intelligente all’interno delle ricette
            della settimana</div>
        <div class="w-14 h-14 bg-amber-400 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden">
            <img src="../../assets/images/square-arrows.svg" class="w-7 h-6"></img>
        </div>
            <div class="w-16 flex-1 relative overflow-hidden" />
        </div>
    </TutorialWrapper>
</template>
<script setup lang="ts">
import TutorialWrapper from '../../components/TutorialWrapper.vue'
</script>