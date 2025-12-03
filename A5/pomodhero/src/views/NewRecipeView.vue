<script>
import Header from "../components/Header.vue";
import InputChip from "../components/InputChip.vue";
import FloatingButton from "../components/FloatingButton.vue";
import ConfirmDialog from "../components/ConfirmDialog.vue";
import { getData, setData } from "../utils/storage";
import checkIcon from "../assets/images/check.svg";
import soundWavesGif from "../assets/images/sound-waves.gif";

export default {
  components: {
    Header,
    InputChip,
    FloatingButton,
    ConfirmDialog,
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
      checkIcon,
      soundWavesGif,
      isRecording: false,
      isClosing: false,
      showDialog: false,
      dialogMessage: "",
    };
  },
  mounted() {
    if (this.method === "audio") {
      this.isRecording = true;
    }
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
    stopRecording() {
      this.isClosing = true;
      setTimeout(() => {
        this.isRecording = false;
        this.isClosing = false;
        this.loadRecipeFromStorage();
      }, 300);
    },
    loadRecipeFromStorage() {
      const data = getData();
      if (data.recipes && data.recipes.length > 0) {
        const recipe = data.recipes[0];
        this.title = recipe.title || "";
        
        // Parse ingredients from recipe
        if (recipe.ingredients && recipe.ingredients.length > 0) {
          this.ingredients = recipe.ingredients.map((ing) => {
            // Parse "quantity unit" format, e.g., "100 gr"
            const parts = ing.quantity.split(" ");
            const quantity = parts[0] || "";
            const unit = parts[1] || "gr";
            
            return {
              name: ing.name || "",
              quantity: quantity,
              unit: unit,
            };
          });
        }
      }
    },
    showAlert(message) {
      this.dialogMessage = message;
      this.showDialog = true;
    },
    saveRecipe() {
      // Validation
      if (!this.title.trim()) {
        this.showAlert("Inserisci un titolo per la ricetta");
        return;
      }

      const validIngredients = this.ingredients.filter(
        (ing) => ing.name.trim() && parseFloat(ing.quantity) > 0
      );

      if (validIngredients.length === 0) {
        this.showAlert("Aggiungi almeno un ingrediente");
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
    <FloatingButton 
      :icon="checkIcon" 
      :on-click="saveRecipe" 
    />
    
    <ConfirmDialog
      v-model:show="showDialog"
      title="Attenzione"
      :message="dialogMessage"
      confirm-text="OK"
      :show-cancel="false"
    />
    
    <!-- Audio Recording Modal -->
    <div v-if="isRecording" :class="$style.modalOverlay" @click="stopRecording">
      <div :class="[$style.audioModal, isClosing ? $style.slideDown : '']" @click.stop>
        <img :src="soundWavesGif" alt="Recording..." :class="$style.soundWaves" />
        <div :class="$style.stopButton" @click="stopRecording">
          <img :src="checkIcon" alt="Stop" />
        </div>
      </div>
    </div>
  </div>
</template>
<style module>
.newrecipe {
  width: 100%;
  height: 100vh;
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
  flex: 1;
  background-color: #f2f4f2;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-bottom: 80px;
  box-sizing: border-box;
  gap: 10px;
  font-size: 20px;
  color: #000;
}
.recipeTitleInput {
  align-self: stretch;
  overflow: hidden;
  flex-shrink: 0;
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
  position: sticky;
  top: 0;
  background-color: #f2f4f2;
  z-index: 1;
}
.ingredientsLabel {
  align-self: stretch;
  width: 60%;
  overflow: hidden;
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
  width: 40%;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  box-sizing: border-box;
}
.recipeIngredientInput {
  align-self: stretch;
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
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #cac4d0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.ingredientQta {
  height: 48px;
  flex-shrink: 0;
  overflow: hidden;
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
  cursor: pointer;
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
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 1000;
}
.audioModal {
  background-color: #ffffff;
  border-radius: 20px 20px 0 0;
  padding: 30px 20px;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  animation: slideUp 0.3s ease-out;
}
@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slideDown {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}
.slideDown {
  animation: slideDown 0.3s ease-out forwards;
}
.soundWaves {
  width: 200px;
  height: 200px;
  object-fit: contain;
}
.stopButton {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #cd471f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s;
}
.stopButton:active {
  opacity: 0.8;
}
.stopButton img {
  width: 24px;
  height: 24px;
}
</style>
