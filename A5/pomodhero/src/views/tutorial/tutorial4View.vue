<template>
  <TutorialWrapper :current-page="4">
    <div
      class="w-full h-[53.75rem] relative bg-whitesmoke overflow-hidden flex flex-col items-center justify-center py-[1.875rem] px-[1.312rem] box-border gap-[0.625rem] text-center text-[1.5rem] text-black font-montserrat"
    >
      <div class="w-[4.875rem] flex-1 relative overflow-hidden" />
      <div class="self-stretch relative">
        <span class="font-semibold">Gestisci gli imprevisti </span>
        <span>vendendo gli alimenti </span>
      </div>
      <div class="w-14 h-14 py-5 bg-amber-400 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden">
        <img src="../../assets/images/sell.svg" class="w-7 h-6"></img>
      </div>
      <div
        class="w-[4.188rem] h-[2.938rem] relative overflow-hidden shrink-0"
      />
      <div class="self-stretch relative">
        o facendoli ridistribuire in modo intelligente all'interno delle ricette
        della settimana
      </div>
      <div class="w-14 h-14 bg-amber-400 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden">
        <img src="../../assets/images/square-arrows.svg" class="w-7 h-6"></img>
      </div>
      <div class="w-[4rem] flex-1 relative overflow-hidden" />
    </div>
  </TutorialWrapper>
</template>
<script setup lang="ts">
import TutorialWrapper from "../../components/TutorialWrapper.vue";
</script>
