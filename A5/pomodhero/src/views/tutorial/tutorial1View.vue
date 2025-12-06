<template>
    <TutorialWrapper :current-page="1">
        <div
            class="w-full flex-1 flex flex-col items-center justify-center py-[30px] px-[21px] box-border gap-2.5 text-center text-base text-black font-montserrat"
            style="font-family: 'Montserrat', sans-serif; background-color: #F2F4F2;">
            <div class="w-[78px] flex-1 relative overflow-hidden" />
            <div class="relative text-[32px]">
                <span>Benvenuto in<br /></span>
                <span class="text-5xl font-semibold">POMODHERO</span>
            </div>
            <div class="w-16 h-[42px] relative overflow-hidden shrink-0" />
            <img src="../../assets/images/mascotte.png" class="w-[306px] relative max-h-full object-cover" alt="" />
            <div class="w-[115px] h-[81px] relative overflow-hidden shrink-0" />
            <div class="w-[356px] relative inline-block">Diventa l'eroe che salva il cibo e lo condivide con chi ne ha
                bisogno, trasformando ogni pasto salvato in un piccolo atto eroico</div>
            <div class="w-16 flex-1 relative overflow-hidden" />
        </div>
    </TutorialWrapper>
</template>
<script setup lang="ts">
import TutorialWrapper from '../../components/TutorialWrapper.vue'
</script>