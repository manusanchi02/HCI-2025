<template>
  <TutorialWrapper :current-page="1">
    <div
      class="w-full h-[53.75rem] relative bg-whitesmoke overflow-hidden flex flex-col items-center justify-center py-[1.875rem] px-[1.312rem] box-border gap-[0.625rem] text-center text-[1rem] text-black font-montserrat"
    >
      <div class="w-[4.875rem] flex-1 relative overflow-hidden" />
      <div class="relative text-[2rem]">
        <span>Benvenuto in<br /></span>
        <span class="text-[3rem] font-semibold">POMODHERO</span>
      </div>
      <div class="w-[4rem] h-[2.625rem] relative overflow-hidden shrink-0" />
      <img
        src="../../assets/images/mascotte.png"
        class="w-[19.125rem] relative max-h-full object-cover"
        alt=""
      />
      <div
        class="w-[7.188rem] h-[5.063rem] relative overflow-hidden shrink-0"
      />
      <div class="w-[22.25rem] relative inline-block">
        Diventa l'eroe che salva il cibo e lo condivide con chi ne ha bisogno,
        trasformando ogni pasto salvato in un piccolo atto eroico
      </div>
      <div class="w-[4rem] flex-1 relative overflow-hidden" />
    </div>
  </TutorialWrapper>
</template>
<script setup lang="ts">
import TutorialWrapper from "../../components/TutorialWrapper.vue";
</script>
