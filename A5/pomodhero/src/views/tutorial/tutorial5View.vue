<template>
  <TutorialWrapper :current-page="5">
    <div
      class="w-full h-[53.75rem] relative bg-whitesmoke overflow-hidden flex flex-col items-center justify-center py-[1.875rem] px-[1.312rem] box-border gap-[0.625rem] text-center text-[1.5rem] text-black font-montserrat"
    >
      <div class="w-[4.875rem] flex-1 relative overflow-hidden" />
      <img
        src="../../assets/images/mascotte.png"
        class="w-[15.125rem] relative max-h-full object-cover"
        alt=""
      />
      <div class="w-[6.75rem] h-[4.125rem] relative overflow-hidden shrink-0" />
      <div class="self-stretch relative font-medium">
        Sei pronto ad unirti agli eroi del cibo?
      </div>
      <div
        class="self-stretch overflow-hidden flex flex-col items-center justify-center py-[1.25rem] px-[0rem] gap-[0.625rem] text-[1.875rem] text-white"
      >
        <div
          class="self-stretch rounded-[25px] overflow-hidden flex items-center justify-center py-[1rem] px-[7.625rem]"
          style="background-color: #003027;"
        >
          <div
            @click="goToLogin"
            class="relative leading-[1.75rem] font-semibold"
          >
            Accedi
          </div>
        </div>
        <div
          class="self-stretch rounded-[25px] bg-white overflow-hidden flex items-center justify-center py-[1rem] px-[7.625rem] text-[1.5rem] text-black"
        >
          <div
            @click="goToHome"
            class="relative leading-[1.75rem] font-semibold shrink-0"
          >
            Entra come ospite
          </div>
        </div>
      </div>
      <div class="w-[4rem] flex-1 relative overflow-hidden" />
    </div>
  </TutorialWrapper>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import TutorialWrapper from "../../components/TutorialWrapper.vue";
import { setTutorialCompleted } from "../../utils/storage";

const router = useRouter();

function goToLogin() {
  setTutorialCompleted();
  router.push("/login");
}

function goToHome() {
  setTutorialCompleted();
  router.push("/");
}
</script>
