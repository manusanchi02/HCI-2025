<script lang="ts">
import Header from "../components/Header.vue";
import FloatingButton from "../components/FloatingButton.vue";
import SellModal from "../components/SellModal.vue";
import checkIcon from "../assets/images/check.svg";
import { getData, setData } from "../utils/storage";

export default {
  components: {
    Header,
    FloatingButton,
    SellModal,
  },
  props: {
    recipe: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      checkIcon,
      recipeTitle: "",
      ingredients: [], // { name, quantity, action: 'recycle' | 'sell' | null }
      showSellModal: false,
      soldItems: [],
    };
  },
  computed: {
    headerTitle() {
      return this.recipeTitle || "Imprevisto";
    },
  },
  mounted() {
    this.loadRecipe();
  },
  methods: {
    loadRecipe() {
      const data = getData();
      const recipeId = parseInt(this.recipe);
      const recipe = data.recipes.find(r => r.id === recipeId);
      
      if (recipe) {
        this.recipeTitle = recipe.title;
        this.ingredients = recipe.ingredients.map(ing => ({
          name: ing.name,
          quantity: ing.quantity,
          action: null, // 'recycle', 'sell', or null
        }));
      }
    },
    toggleAction(index, action) {
      if (this.ingredients[index].action === action) {
        this.ingredients[index].action = null;
      } else {
        this.ingredients[index].action = action;
      }
    },
    saveActions() {
      const recycled = [];
      const sold = [];
      
      this.ingredients.forEach(ing => {
        if (ing.action === 'recycle') {
          recycled.push({ name: ing.name, quantity: ing.quantity });
        } else if (ing.action === 'sell') {
          sold.push({ name: ing.name, quantity: ing.quantity });
        }
      });
      
      if (recycled.length > 0) {
        this.recycleIngredients(recycled);
      }
      
      if (sold.length > 0) {
        this.soldItems = sold;
        this.showSellModal = true;
      } else {
        this.deleteRecipe();
        this.$router.push("/");
      }
    },
    recycleIngredients(recycled) {
      const data = getData();
      const recipeId = parseInt(this.recipe);
      
      // Find the current recipe's day
      let currentDayIndex = -1;
      data.days.forEach((day, index) => {
        if (day.lunch.includes(recipeId) || day.dinner.includes(recipeId)) {
          currentDayIndex = index;
        }
      });
      
      // Get future days (after current day)
      const futureDays = currentDayIndex >= 0 
        ? data.days.slice(currentDayIndex + 1) 
        : data.days;
      
      // Collect all recipes from future days
      const futureRecipeIds = new Set();
      futureDays.forEach(day => {
        if (Array.isArray(day.lunch)) day.lunch.forEach(id => futureRecipeIds.add(id));
        if (Array.isArray(day.dinner)) day.dinner.forEach(id => futureRecipeIds.add(id));
      });
      
      const futureRecipes = data.recipes.filter(r => futureRecipeIds.has(r.id));
      
      // Try to add recycled ingredients to existing recipes
      const remainingIngredients = [];
      
      recycled.forEach(recycledIng => {
        let added = false;
        
        // Search for matching ingredient in future recipes
        for (let recipe of futureRecipes) {
          const matchingIng = recipe.ingredients.find(ing => 
            ing.name.toLowerCase() === recycledIng.name.toLowerCase()
          );
          
          if (matchingIng) {
            // Parse and sum quantities
            const currentQty = this.parseQuantity(matchingIng.quantity);
            const recycledQty = this.parseQuantity(recycledIng.quantity);
            
            if (currentQty.unit === recycledQty.unit) {
              const newQty = currentQty.value + recycledQty.value;
              matchingIng.quantity = `${newQty} ${currentQty.unit}`;
              added = true;
              break;
            }
          }
        }
        
        if (!added) {
          remainingIngredients.push(recycledIng);
        }
      });
      
      // If there are remaining ingredients, try to add randomly to future recipes
      if (remainingIngredients.length > 0 && futureRecipes.length > 0) {
        remainingIngredients.forEach(ing => {
          const randomRecipe = futureRecipes[Math.floor(Math.random() * futureRecipes.length)];
          randomRecipe.ingredients.push({
            name: ing.name,
            quantity: ing.quantity,
          });
        });
      } 
      // If no future recipes, create "Avanzi" recipe on Sunday
      else if (remainingIngredients.length > 0) {
        const sundayIndex = 6; // Sunday is the last day
        const sunday = data.days[sundayIndex];
        
        // Find or create "Avanzi" recipe
        let avanziRecipe = data.recipes.find(r => r.title === "Avanzi");
        
        if (!avanziRecipe) {
          const maxId = data.recipes.reduce((max, r) => Math.max(max, r.id), -1);
          avanziRecipe = {
            id: maxId + 1,
            title: "Avanzi",
            ingredients: [],
          };
          data.recipes.push(avanziRecipe);
          
          // Add to Sunday dinner if not already there
          if (!Array.isArray(sunday.dinner)) sunday.dinner = [];
          if (!sunday.dinner.includes(avanziRecipe.id)) {
            sunday.dinner.push(avanziRecipe.id);
          }
        }
        
        // Add remaining ingredients to Avanzi recipe
        remainingIngredients.forEach(ing => {
          // Check if ingredient already exists in Avanzi
          const existingIng = avanziRecipe.ingredients.find(i => 
            i.name.toLowerCase() === ing.name.toLowerCase()
          );
          
          if (existingIng) {
            const currentQty = this.parseQuantity(existingIng.quantity);
            const newQty = this.parseQuantity(ing.quantity);
            
            if (currentQty.unit === newQty.unit) {
              existingIng.quantity = `${currentQty.value + newQty.value} ${currentQty.unit}`;
            } else {
              avanziRecipe.ingredients.push({ name: ing.name, quantity: ing.quantity });
            }
          } else {
            avanziRecipe.ingredients.push({ name: ing.name, quantity: ing.quantity });
          }
        });
      }
      
      setData(data);
    },
    parseQuantity(quantityStr) {
      // Parse "123.45 gr" format
      const parts = quantityStr.split(' ');
      return {
        value: parseFloat(parts[0]) || 0,
        unit: parts[1] || '',
      };
    },
    handleSellSubmit(prices) {
      console.log('Sold items with prices:', prices);
      this.showSellModal = false;
      this.deleteRecipe();
      this.$router.pus("/");
    },
    closeSellModal() {
      this.showSellModal = false;
    },
    deleteRecipe() {
      const data = getData();
      const recipeId = parseInt(this.recipe);
      
      // Remove recipe from recipes array
      data.recipes = data.recipes.filter(r => r.id !== recipeId);
      
      // Remove recipe ID from all days
      data.days.forEach(day => {
        if (Array.isArray(day.lunch)) {
          day.lunch = day.lunch.filter(id => id !== recipeId);
        }
        if (Array.isArray(day.dinner)) {
          day.dinner = day.dinner.filter(id => id !== recipeId);
        }
      });
      
      setData(data);
    },
  },
};
</script>
<template>
  <div :class="$style.unexpected">
    <Header :title="headerTitle" />
    <div :class="$style.content">
      <div :class="$style.recipeTitle">
        <div :class="$style.pomodhero">{{ recipeTitle }}</div>
      </div>
      <div 
        v-for="(ingredient, index) in ingredients" 
        :key="index" 
        :class="$style.recipeIngredient"
      >
        <div :class="$style.inputChip">
          <div :class="$style.stateLayer">
            <div :class="$style.labelText">{{ ingredient.name }}</div>
          </div>
        </div>
        <div :class="$style.inputChip2">
          <div :class="$style.stateLayer">
            <div :class="$style.labelText">{{ ingredient.quantity }}</div>
          </div>
        </div>
        <div 
          :class="[$style.recycleIcon, ingredient.action === 'recycle' ? $style.selected : '']"
          @click="toggleAction(index, 'recycle')"
        >
          <img alt="" src="../assets/images/square-arrows.svg"/>
        </div>
        <div 
          :class="[$style.sellIcon, ingredient.action === 'sell' ? $style.selected : '']"
          @click="toggleAction(index, 'sell')"
        >
          <img alt="" src="../assets/images/sell.svg"/>
        </div>
      </div>
    </div>
    <FloatingButton 
      :icon="checkIcon" 
      :on-click="saveActions" 
    />
    <SellModal 
      v-if="showSellModal"
      :items="soldItems"
      @submit="handleSellSubmit"
      @close="closeSellModal"
    />
  </div>
</template>
<style module>
.unexpected {
  width: 100%;
  height: 933px;
  position: relative;
  background-color: #f2f4f2;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  font-size: 14px;
  color: #1d1b20;
  font-family: Roboto;
}
.statusBar {
  align-self: stretch;
  height: 52px;
  background-color: #f2f4f2;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 10px 24px;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
  gap: 20px;
  text-align: left;
}
.time {
  position: relative;
  letter-spacing: 0.01em;
  line-height: 20px;
  font-weight: 500;
  z-index: 0;
}
.rightIcons {
  height: 17px;
  width: 46px;
  position: relative;
  z-index: 1;
}
.cameraCutoutIcon {
  height: 24px;
  width: 24px;
  position: absolute;
  margin: 0 !important;
  top: 18px;
  left: calc(50% - 12px);
  z-index: 2;
}
.header {
  align-self: stretch;
  background-color: #f2f4f2;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 36px;
  font-size: 32px;
  color: #191c1b;
}
.leftheader {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 0px;
  gap: 15px;
}
.leftheaderChild {
  width: 22px;
  height: 22px;
}
.pomodhero {
  position: relative;
  line-height: 28px;
}
.rightheader {
  align-self: stretch;
  flex: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.icon {
  height: 64px;
  width: 64px;
  position: relative;
}
.content {
  align-self: stretch;
  height: 646px;
  background-color: #f2f4f2;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  gap: 10px;
  font-size: 16px;
  color: #49454f;
}
.recipeTitle {
  align-self: stretch;
  background-color: #f2f4f2;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  text-align: left;
  font-size: 20px;
  color: #000;
}
.recipeIngredient {
  align-self: stretch;
  height: 78px;
  background-color: #f2f4f2;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  padding: 10px 0px;
  box-sizing: border-box;
  gap: 10px;
}
.inputChip {
  height: 58px;
  width: 35%;
  border-radius: 8px;
  border: 1px solid #707975;
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}
.stateLayer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
}
.labelText {
  position: relative;
  letter-spacing: 0.1px;
  line-height: 20px;
}
.inputChip2 {
  height: 58px;
  width: 70px;
  border-radius: 8px;
  border: 1px solid #707975;
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.recycleIcon {
  height: 58px;
  width: 58px;
  border-radius: 25px;
  flex-shrink: 0;
  background-color: #e1e3e1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
}
.recycleIcon.selected {
  background-color: #edb931;
}
.sellIcon {
  height: 58px;
  width: 58px;
  border-radius: 25px;
  flex-shrink: 0;
  background-color: #e1e3e1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
}
.sellIcon.selected {
  background-color: #edb931;
}
.floatingButton {
  align-self: stretch;
  background-color: #f2f4f2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
}
.confirmIcon {
  height: 60px;
  width: 60px;
  border-radius: 50px;
}
.gestureBar {
  align-self: stretch;
  height: 24px;
  position: relative;
  background-color: #f2f4f2;
}
.handle {
  position: absolute;
  top: calc(50% - 2px);
  left: calc(50% - 54px);
  border-radius: 12px;
  background-color: #1d1b20;
  width: 108px;
  height: 4px;
}
</style>
