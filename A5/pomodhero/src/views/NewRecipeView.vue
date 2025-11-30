<script>
import Header from "../components/Header.vue";
import InputChip from "../components/InputChip.vue";
import { getData, setData } from "../utils/storage";

export default {
  components: {
    Header,
    InputChip,
  },
  props: {
    day: {
      type: String,
      required: true,
    },
    meal: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
  },
  computed: {
    headerTitle() {
      const dayMap = {
        monday: "Lunedì",
        tuesday: "Martedì",
        wednesday: "Mercoledì",
        thursday: "Giovedì",
        friday: "Venerdì",
        saturday: "Sabato",
        sunday: "Domenica",
      };
      const mealText = this.meal === "lunch" ? "Pranzo" : "Cena";
      
      return `${dayMap[this.day]} - ${mealText}`;
    },
  },
  data() {
    return {
      title: "",
      ingredients: [
        { name: "", quantity: "", unit: "gr" },
        { name: "", quantity: "", unit: "gr" },
      ],
      unitOptions: ["gr", "kg", "ml", "l", "pz"],
    };
  },
  methods: {
    addIngredient() {
      this.ingredients.push({ name: "", quantity: "", unit: "gr" });
    },
    removeIngredient(index) {
      if (this.ingredients.length > 1) {
        this.ingredients.splice(index, 1);
      }
    },
    saveRecipe() {
      // Validation
      if (!this.title.trim()) {
        alert("Inserisci un titolo per la ricetta");
        return;
      }

      const validIngredients = this.ingredients.filter(
        (ing) => ing.name.trim() && parseFloat(ing.quantity) > 0
      );

      if (validIngredients.length === 0) {
        alert("Aggiungi almeno un ingrediente");
        return;
      }

      // Get data from storage
      const data = getData();
      
      // Find next available ID
      const maxId = data.recipes.reduce((max, recipe) => 
        Math.max(max, recipe.id), -1
      );
      const newId = maxId + 1;

      // Create new recipe
      const newRecipe = {
        id: newId,
        title: this.title.trim(),
        ingredients: validIngredients.map((ing) => ({
          name: ing.name.trim(),
          quantity: `${parseFloat(ing.quantity)} ${ing.unit}`,
        })),
      };

      // Add to storage
      data.recipes.push(newRecipe);

      // Add recipe ID to the corresponding day and meal
      const dayMap = {
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
      };

      const dayName = dayMap[this.day];
      const dayObj = data.days.find((d) => d.name === dayName);

      if (dayObj) {
        // Ensure lunch and dinner are arrays
        if (!Array.isArray(dayObj.lunch)) {
          dayObj.lunch = [];
        }
        if (!Array.isArray(dayObj.dinner)) {
          dayObj.dinner = [];
        }
        
        // Add recipe ID to the correct meal array
        if (this.meal === "lunch") {
          dayObj.lunch.push(newId);
        } else {
          dayObj.dinner.push(newId);
        }
      }

      setData(data);

      this.$router.go(-1);
    },
  },
};
</script>
<template>
  <div :class="$style.newrecipe">
    <Header :title="headerTitle" />
    <div :class="$style.content">
      <div :class="$style.recipeTitleInput">
        <div :class="$style.pomodhero">Titolo</div>
        <InputChip 
          v-model="title" 
          type="text" 
          placeholder="Titolo ricetta" 
        />
      </div>
      <div :class="$style.ingredientsTitle">
        <div :class="$style.ingredientsLabel">
          <div :class="$style.ingredients">Ingredienti</div>
        </div>
        <div :class="$style.quantityLabel">
          <div :class="$style.ingredients">Quantità</div>
        </div>
      </div>
      <div 
        v-for="(ingredient, index) in ingredients" 
        :key="index" 
        :class="$style.recipeIngredientInput"
      >
        <div :class="$style.inputChip2">
          <InputChip 
            v-model="ingredient.name"
            type="text"
            placeholder="Nome ingrediente"
            width="100%"
            height="100%"
            no-border
          />
        </div>
        <div :class="$style.ingredientQta">
          <div :class="$style.inputChip3">
            <InputChip 
              v-model="ingredient.quantity"
              type="number"
              step="0.50"
              min="0"
              placeholder="0.00"
              width="100%"
              height="100%"
              text-align="center"
              no-border
            />
          </div>
          <div :class="$style.splitButton">
            <div :class="$style.leadingButton">
              <div :class="$style.stateLayer4">
                <div :class="$style.label">{{ ingredient.unit }}</div>
              </div>
            </div>
            <div :class="$style.trailingButton">
              <select 
                v-model="ingredient.unit" 
                :class="$style.unitSelect"
              >
                <option 
                  v-for="option in unitOptions" 
                  :key="option" 
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
              <img
                :class="$style.trailingButtonIcon"
                alt=""
                src="../assets/images/arrow-down.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.recipeIngredientInput3">
        <div :class="$style.roundButton" @click="addIngredient">
          <img alt="" src="../assets/images/plus.svg" />
        </div>
      </div>
    </div>
    <div :class="$style.floatingButton">
      <div :class="$style.roundButton" @click="saveRecipe">
        <img alt="" src="../assets/images/check.svg"/>
      </div>
    </div>
  </div>
</template>
<style module>
.newrecipe {
  width: 100%;
  height: 933px;
  position: relative;
  background-color: #f2f4f2;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
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
  text-align: center;
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
  font-size: 20px;
  color: #000;
}
.recipeTitleInput {
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  gap: 10px;
}
.inputChip {
  align-self: stretch;
  height: 58px;
  border-radius: 8px;
  border: 1px solid #707975;
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  text-align: center;
  color: #707975;
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
.ingredientsTitle {
  align-self: stretch;
  height: 39px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  box-sizing: border-box;
  gap: 10px;
}
.ingredientsLabel {
  align-self: stretch;
  width: 194px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
}
.ingredients {
  position: relative;
  line-height: 28px;
  flex-shrink: 0;
}
.quantityLabel {
  align-self: stretch;
  width: 90px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  box-sizing: border-box;
}
.recipeIngredientInput {
  align-self: stretch;
  height: 68px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  gap: 10px;
  text-align: center;
  font-size: 14px;
  color: #49454f;
}
.inputChip2 {
  align-self: stretch;
  width: 191px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #cac4d0;
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}
.ingredientQta {
  height: 48px;
  width: 147px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 5px;
}
.inputChip3 {
  align-self: stretch;
  width: 48px;
  border-radius: 8px;
  border: 1px solid #cac4d0;
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stateLayer3 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  flex-shrink: 0;
}
.splitButton {
  height: 48px;
  width: 94px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  text-align: left;
  color: #fff;
}
.leadingButton {
  height: 40px;
  border-radius: 20px 4px 4px 20px;
  background-color: #00483c;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.stateLayer4 {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 10px 12px 10px 16px;
  isolation: isolate;
}
.label {
  position: relative;
  letter-spacing: 0.1px;
  line-height: 20px;
  z-index: 0;
}
.trailingButton {
  height: 40px;
  width: 48px;
  position: relative;
  border-radius: 4px 20px 20px 4px;
  background-color: #00483c;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.unitSelect {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
}
.unitSelect option {
  background-color: #00483c;
  color: #ffffff;
  font-family: Roboto;
  font-size: 14px;
  padding: 8px;
}
.trailingButtonIcon {
  width: 22px;
  height: 22px;
  position: absolute;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}
.recipeIngredientInput3 {
  align-self: stretch;
  height: 68px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
}
.roundButton {
  height: 60px;
  width: 60px;
  border-radius: 50px;
  flex-shrink: 0;
  background-color: #cd471f;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
