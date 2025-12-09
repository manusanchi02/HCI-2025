<template>
  <TutorialWrapper :current-page="3">
    <div
      class="w-full h-[53.75rem] relative bg-whitesmoke overflow-hidden flex flex-col items-center justify-center py-[1.875rem] px-[1.312rem] box-border gap-[0.625rem] text-center text-[1.5rem] text-black font-montserrat"
    >
      <div
        class="w-[4.875rem] h-[2.331rem] relative overflow-hidden shrink-0"
      />
      <div class="self-stretch relative">
        <span class="font-semibold">Accedi</span>
        <span> per scambiare cibo con la community</span>
      </div>
      <div class="w-[4.25rem] flex-1 relative overflow-hidden" />
      <div
        class="h-[31.563rem] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[0.625rem]"
      >
        <div
          class="overflow-hidden flex items-start p-[0.625rem] gap-[0.625rem]"
        >
          <img
            src="../../assets/images/Item1.png"
            class="w-[9.438rem] relative max-h-full object-cover"
            alt=""
          />
          <img
            src="../../assets/images/Item2.png"
            class="w-[9.438rem] relative max-h-full object-cover"
            alt=""
          />
        </div>
        <img
          src="../../assets/images/chat.png"
          class="w-[15.75rem] relative rounded-3xl max-h-full object-cover"
          alt=""
        />
      </div>
      <div class="w-[4rem] flex-1 relative overflow-hidden" />
    </div>
  </TutorialWrapper>
</template>
<script setup lang="ts">
import TutorialWrapper from "../../components/TutorialWrapper.vue";
</script>
