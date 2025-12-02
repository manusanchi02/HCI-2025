<template>
    <div :class="$style.home">
        <Header title="Home" :enable-back="false" ></Header>
        <div :class="$style.content">
            <HomeListItem
                v-for="(day, index) in weekDays"
                :key="index"
                :week-day="day.weekDay"
                :day-number="day.dayNumber"
                :month="day.month"
                :lunch-recipes-count="day.lunchRecipesCount"
                :dinner-recipes-count="day.dinnerRecipesCount"
                :lunch-ingredients-count="day.lunchIngredientsCount"
                :dinner-ingredients-count="day.dinnerIngredientsCount"
                :is-today="day.isToday"
            ></HomeListItem>
        </div>
        <nav-bar></nav-bar>
    </div>
</template>
<script lang="ts">
import Header from '../components/Header.vue';
import NavBar from '../components/NavBar.vue'; 
import HomeListItem from '../components/HomeListItem.vue';
import * as StorageUtils from '../utils/storage.js';

export default {
    components: {
        Header,
        NavBar,
        HomeListItem
    },
    data() {
        return {
            weekDays: []
        };
    },
    mounted() {
        this.generateWeekData();
    },
    methods: {
        generateWeekData() {
            const today = new Date();
            const weekDays = [];
            const dayNamesEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const monthNamesEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const storageData = StorageUtils.getData();

            // Get start of week (Monday)
            const currentDay = today.getDay();
            const diff = currentDay === 0 ? -6 : 1 - currentDay; // If Sunday, go back 6 days, otherwise go to Monday
            const monday = new Date(today);
            monday.setDate(today.getDate() + diff);

            for (let i = 0; i < 7; i++) {
                const date = new Date(monday);
                date.setDate(monday.getDate() + i);
                
                const dayOfWeek = date.getDay();
                const dayNameEn = dayNamesEn[dayOfWeek];
                const dayData = storageData.days.find(d => d.name === dayNameEn);
                
                // Count recipes and ingredients
                const lunchRecipes = dayData?.lunch || [];
                const dinnerRecipes = dayData?.dinner || [];
                
                const lunchIngredientsCount = lunchRecipes.reduce((total, recipeId) => {
                    const recipe = storageData.recipes.find(r => r.id === recipeId);
                    return total + (recipe?.ingredients?.length || 0);
                }, 0);
                
                const dinnerIngredientsCount = dinnerRecipes.reduce((total, recipeId) => {
                    const recipe = storageData.recipes.find(r => r.id === recipeId);
                    return total + (recipe?.ingredients?.length || 0);
                }, 0);

                weekDays.push({
                    weekDay: dayNamesEn[dayOfWeek],
                    dayNumber: date.getDate().toString(),
                    month: monthNamesEn[date.getMonth()],
                    lunchRecipesCount: lunchRecipes.length,
                    dinnerRecipesCount: dinnerRecipes.length,
                    lunchIngredientsCount,
                    dinnerIngredientsCount,
                    isToday: date.toDateString() === today.toDateString()
                });
            }

            this.weekDays = weekDays;
        }
    }
}
</script>
<style module>
.home {
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

.content {
    align-self: stretch;
    height: 676px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 18px;
    box-sizing: border-box;
    font-size: 25px;
    color: #003027;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
</style>