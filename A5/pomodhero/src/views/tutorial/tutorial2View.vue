<template>
  <TutorialWrapper :current-page="2">
    <div
      class="w-full h-[53.75rem] relative bg-whitesmoke overflow-hidden flex flex-col items-center justify-center py-[1.875rem] px-[1.312rem] box-border gap-[0.625rem] text-center text-[1.5rem] text-black font-montserrat"
    >
      <div class="w-[4.875rem] flex-1 relative overflow-hidden" />
      <div class="self-stretch relative">
        <span class="font-semibold">Programma</span>
        <span> i pasti della settimana con facilità</span>
      </div>
      <div class="w-[2.75rem] flex-1 relative overflow-hidden" />
      <img
        src="../../assets/images/week.png"
        class="w-[20.563rem] h-[33.75rem] object-cover"
        alt=""
      />
      <div class="w-[4rem] flex-1 relative overflow-hidden" />
    </div>
  </TutorialWrapper>
</template>
<script setup lang="ts">
import TutorialWrapper from "../../components/TutorialWrapper.vue";
</script>
