<template>
    <div
        class="w-96 px-3.5 py-2 inline-flex justify-start items-center gap-2.5 overflow-hidden">
        <div class="flex-1 py-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div
                :class="['self-stretch py-[5px] rounded-2xl inline-flex justify-center items-center gap-2.5 overflow-hidden', isToday ? 'bg-emerald-900' : 'bg-white']">
                <div
                    :class="['justify-start text-2xl font-[\'Roboto\'] italic', isToday ? 'text-white' : 'text-emerald-950 font-normal']">
                    {{ weekDay }}</div>
            </div>
            <div class="self-stretch px-2.5 inline-flex justify-center items-center gap-2.5 overflow-hidden">
                <img src="../assets/images/calendar.svg"></img>
                <div
                    class="justify-start text-emerald-950 text-xl font-['Roboto'] italic">
                    {{ dayNumber }}</div>
                <div
                    class="justify-start text-emerald-900 text-xl font-['Roboto'] italic">
                    {{ month }}</div>
            </div>
        </div>
        <div :class="['self-stretch pl-3.5 pr-2.5 rounded-3xl flex justify-center items-center overflow-hidden', isToday ? 'bg-amber-400' : 'bg-white']">
            <div class="px-2.5 inline-flex flex-col justify-start items-start overflow-hidden">
                <div class="w-20 h-6 justify-start text-emerald-950 text-2xl font-normal font-['Roboto'] italic mb-0.5">
                    Pranzo</div>
                <div :class="['justify-start text-sm font-normal font-[\'Roboto\'] italic', isToday ? 'text-emerald-900' : 'text-gray-500']">{{ lunchRecipesCount}} {{ lunchRecipesLabel }}</div>
                <div :class="['w-20 h-5 justify-start text-sm font-normal font-[\'Roboto\'] italic -mt-1.5',  isToday ? 'text-emerald-900' : 'text-gray-500']">{{lunchIngredientsCount }} {{ lunchIngredientsLabel }}
                </div>
            </div>
            <div class="px-2.5 inline-flex flex-col justify-start items-start overflow-hidden">
                <div class="w-14 h-6 justify-start text-emerald-950 text-2xl font-normal font-['Roboto'] italic mb-0.5">
                    Cena</div>
                <div :class="['justify-start text-sm font-normal font-[\'Roboto\'] italic',  isToday ? 'text-emerald-900' : 'text-gray-500']">{{dinnerRecipesCount }} {{ dinnerRecipesLabel }}</div>
                <div :class="['w-20 h-5 justify-start text-sm font-normal font-[\'Roboto\'] italic -mt-1.5',  isToday ? 'text-emerald-900' : 'text-gray-500']">{{dinnerIngredientsCount }} {{ dinnerIngredientsLabel }}
                </div>
            </div>
            <router-link to="/recipie-details"
                class="px-1 py-2.5 bg-amber-400 rounded-3xl flex justify-center items-center gap-px overflow-hidden">
                <div class="w-px h-2.5 relative"></div>
                <img class="w-2.5 h-5" src="../assets/images/open-details.svg"></img>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "HomeListItem",
    props: {
        weekDay: {
            type: String,
            default: 'Lun'
        },
        dayNumber: {
            type: String,
            default: '24'
        },
        month: {
            type: String,
            default: 'Nov'
        },
        lunchRecipesCount: {
            type: Number,
            default: 1
        },
        dinnerRecipesCount: {
            type: Number,
            default: 2
        },
        lunchIngredientsCount: {
            type: Number,
            default: 3
        },
        dinnerIngredientsCount: {
            type: Number,
            default: 6
        },
        isToday: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        lunchRecipesLabel() {
            return this.lunchRecipesCount === 1 ? 'Ricetta' : 'Ricette';
        },
        dinnerRecipesLabel() {
            return this.dinnerRecipesCount === 1 ? 'Ricetta' : 'Ricette';
        },
        lunchIngredientsLabel() {
            return this.lunchIngredientsCount === 1 ? 'ingrediente' : 'ingredienti';
        },
        dinnerIngredientsLabel() {
            return this.dinnerIngredientsCount === 1 ? 'ingrediente' : 'ingredienti';
        }
    }
};
</script>