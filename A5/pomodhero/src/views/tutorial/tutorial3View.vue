<template>
    <TutorialWrapper :current-page="3">
        <div
            class="w-full flex-1 flex flex-col items-center justify-center py-[30px] px-[21px] box-border gap-2.5 text-center text-2xl text-black font-montserrat"
            style="font-family: 'Montserrat', sans-serif; background-color: #F2F4F2;">
            <div class="w-[78px] h-[37.3px] relative overflow-hidden shrink-0" />
            <div class="self-stretch relative">
                <span class="font-semibold">Accedi</span>
                <span> per scambiare cibo con la community</span>
            </div>
            <div class="w-[68px] flex-1 relative overflow-hidden" />
            <div class="h-[505px] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-2.5">
                <div class="overflow-hidden flex items-start p-2.5 gap-2.5">
                    <img src="../../assets/images/item1.png" class="w-[151px] relative max-h-full object-cover"
                        alt="" />
                    <img src="../../assets/images/item2.png" class="w-[151px] relative max-h-full object-cover"
                        alt="" />
                </div>
                <img src="../../assets/images/chat.png" class="w-[252px] relative rounded-3xl max-h-full object-cover"
                    alt="" />
            </div>
            <div class="w-16 flex-1 relative overflow-hidden" />
        </div>
    </TutorialWrapper>
</template>
<script setup lang="ts">
import TutorialWrapper from '../../components/TutorialWrapper.vue'
</script>