<template>
    <div :class="$style.recipeDetails">
        <Header title="Ricetta" :enable-back="true"></Header>
        <div v-if="recipe"
            class="self-stretch self-stretch p-5 bg-zinc-100 inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden">
            <div
                class="self-stretch p-2.5 bg-zinc-100 flex flex-col justify-center items-start gap-2.5 overflow-hidden">
                <div class="justify-center text-black text-xl font-normal font-['Roboto'] leading-7">{{ recipe.title }}
                </div>
            </div>
            <div v-for="(ingredient, index) in recipe.ingredients" :key="index"
                class="self-stretch py-2.5 bg-zinc-100 inline-flex justify-start items-center gap-2.5 overflow-hidden">
                <div data-configuration="Label only" data-selected="False" data-show-closing-icon="false"
                    data-show-focus-indicator="false" data-state="Enabled"
                    class="flex-1 h-14 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-500 flex justify-start items-center overflow-hidden">
                    <div class="px-3 py-1.5 flex justify-center items-center gap-2 overflow-hidden">
                        <div
                            class="text-center justify-center text-Schemes-On-Surface-Variant text-base font-normal font-['Roboto'] leading-5 tracking-tight truncate">
                            {{ ingredient.name }}</div>
                    </div>
                </div>
                <div data-configuration="Label only" data-selected="False" data-show-closing-icon="false"
                    data-show-focus-indicator="false" data-state="Enabled"
                    class="flex-shrink-0 w-20 h-14 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-500 flex justify-center items-center overflow-hidden">
                    <div class="px-3 py-1.5 flex justify-center items-center gap-2">
                        <div
                            class="text-center justify-center text-Schemes-On-Surface-Variant text-base font-normal font-['Roboto'] leading-5 tracking-tight whitespace-nowrap">
                            {{ ingredient.quantity }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="self-stretch p-5 bg-zinc-100 flex justify-center items-center">
            <div class="text-black text-lg font-normal font-['Roboto']">Ricetta non trovata</div>
        </div>
    </div>
    <div class="self-stretch p-5 bg-zinc-100 inline-flex justify-center items-center gap-2.5 overflow-hidden">
        <div class="w-48 h-16 relative bg-orange-700 rounded-3xl overflow-hidden">
            <div
                v-on:click="openUnexpected()" class="left-[22px] top-[16px] absolute text-center justify-center text-white text-3xl font-bold font-['Roboto'] leading-7">
                Imprevisto</div>
        </div>
    </div>
</template>
<script lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Header from '../components/Header.vue';
import NavBar from '../components/NavBar.vue';
import { getData } from '../utils/storage';

export default {
    components: {
        Header,
        NavBar,
    },
    setup() {
        const route = useRoute();
        const recipe = ref(null);

        onMounted(() => {
            const recipeId = parseInt(Array.isArray(route.params.id) ? route.params.id[0] : route.params.id);
            const data = getData();

            if (data && data.recipes) {
                recipe.value = data.recipes.find(r => r.id === recipeId);
            }
        });

        return {
            recipe
        };
    },
    methods: {
        openUnexpected() {
            this.$router.push({ name: 'UnexpectedView', params: {recipe: this.recipe.id} });
        }
    }
}
</script>
<style module>
.recipeDetails {
    width: 100%;
    height: 933px;
    position: relative;
    box-sizing: border-box;
    background-color: #f2f4f2;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    font-size: 14px;
    color: #1d1b20;
    font-family: Roboto;
}
</style>