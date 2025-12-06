<template>
    <div
        class="w-full h-screen overflow-hidden flex flex-col items-center justify-center py-[30px] px-[21px] box-border gap-2.5 text-center text-2xl text-black font-montserrat"
        style="font-family: 'Montserrat', sans-serif; background-color: #F2F4F2;">
        <div class="w-[78px] flex-1 relative overflow-hidden" />
        <div class="self-stretch relative">
            <span class="font-semibold">Programma</span>
            <span> i pasti della settimana con facilità</span>
        </div>
        <div class="w-11 flex-1 relative overflow-hidden" />
        <img src="../../assets/images/week.png" class="w-[329px] h-[540px] object-cover" alt="" />
        <div class="w-16 flex-1 relative overflow-hidden" />
        <TutorialNavBar :current-page="2" />
    </div>
</template>
<script setup lang="ts">
import TutorialNavBar from '../../components/TutorialNavBar.vue'
</script>