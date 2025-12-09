<script>
import cameraIcon from "../assets/images/camera.svg";
import ConfirmDialog from "./ConfirmDialog.vue";

export default {
  components: {
    ConfirmDialog,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      cameraIcon,
      prices: {},
      expiryDates: {},
      images: {},
      showErrorDialog: false,
      errorMessage: '',
      minDate: new Date().toISOString().split('T')[0],
    };
  },
  mounted() {
    this.items.forEach((item, index) => {
      this.prices[index] = '';
      this.expiryDates[index] = '';
      this.images[index] = '';
    });
  },
  methods: {
    handleSubmit() {
      // Validazione: tutti i campi devono essere compilati
      for (let index = 0; index < this.items.length; index++) {
        if (!this.prices[index] || parseFloat(this.prices[index]) <= 0) {
          this.errorMessage = `Inserisci un prezzo valido per ${this.items[index].name}`;
          this.showErrorDialog = true;
          return;
        }
        if (!this.expiryDates[index]) {
          this.errorMessage = `Inserisci la data di scadenza per ${this.items[index].name}`;
          this.showErrorDialog = true;
          return;
        }
        if (!this.images[index]) {
          this.errorMessage = `Scatta una foto per ${this.items[index].name}`;
          this.showErrorDialog = true;
          return;
        }
      }
      
      const result = this.items.map((item, index) => ({
        name: item.name,
        quantity: item.quantity,
        price: parseFloat(this.prices[index]),
        expiryDate: this.expiryDates[index],
        image: this.images[index],
      }));
      this.$emit('submit', result);
    },
    handleClose() {
      this.$emit('close');
    },
    handleImageUpload(index, event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.images[index] = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
<template>
  <div :class="$style.modalOverlay" @click="handleClose">
    <div :class="$style.sellModal" @click.stop>
      <div :class="$style.ingredients">
        <div 
          v-for="(item, index) in items" 
          :key="index" 
          :class="$style.ingredientToSell"
        >
          <div :class="$style.ingredientName">{{ item.name }}</div>
          <div :class="$style.ingredientFields">
            <div :class="$style.fieldWrapper">
              <label :class="$style.fieldLabel">Prezzo</label>
              <div :class="$style.priceContainer">
                <input 
                  v-model="prices[index]"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="0.00"
                  :class="$style.priceInput"
                />
                <div :class="$style.euro">€</div>
              </div>
            </div>
            <div :class="$style.fieldWrapper">
              <label :class="$style.fieldLabel">Scadenza</label>
              <input 
                v-model="expiryDates[index]"
                type="date"
                :min="minDate"
                :class="$style.dateInput"
              />
            </div>
            <div :class="$style.fieldWrapper">
              <label :class="$style.fieldLabel">Foto</label>
              <label :class="$style.imageLabel">
                <input 
                  type="file"
                  accept="image/*"
                  @change="handleImageUpload(index, $event)"
                  :class="$style.fileInput"
                />
                <div :class="$style.imageButton">
                  <img 
                    v-if="!images[index]"
                    :src="cameraIcon" 
                    alt="Camera"
                    :class="$style.cameraIcon"
                  />
                  <img 
                    v-else
                    :src="images[index]" 
                    alt="Photo"
                    :class="$style.photoPreview"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.button">
        <div :class="$style.submitButton" @click="handleSubmit">
          <b :class="$style.invia">Invia</b>
        </div>
      </div>
    </div>
    <ConfirmDialog
      v-model:show="showErrorDialog"
      :message="errorMessage"
      title="Attenzione"
      :show-cancel="false"
      confirm-text="OK"
    />
  </div>
</template>
<style module>
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.sellModal {
  width: 90%;
  max-width: 500px;
  height: 676px;
  position: relative;
  border-radius: 25px;
  background-color: white;
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;
  text-align: center;
  font-size: 24px;
  color: #000;
  font-family: Roboto;
  animation: slideFromAbove 0.3s ease-out;
}
@keyframes slideFromAbove {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
  	.ingredients {
    		height: 565px;
    		overflow-y: auto;
    		flex-shrink: 0;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		padding: 10px;
    		box-sizing: border-box;
    		gap: 10px;
  	}
  	.ingredientToSell {
    		align-self: stretch;
    		border-bottom: 1px solid #707975;
    		overflow: visible;
    		display: flex;
    		flex-direction: column;
    		align-items: stretch;
    		padding: 15px 20px;
    		gap: 10px;
  	}
  	.ingredientName {
    		font-size: 18px;
    		font-weight: 500;
    		margin-bottom: 5px;
  	}
  	.ingredientFields {
    		display: flex;
    		align-items: flex-end;
    		gap: 10px;
    		flex-wrap: nowrap;
  	}
  	.fieldWrapper {
    		display: flex;
    		flex-direction: column;
    		gap: 4px;
  	}
  	.fieldLabel {
    		font-size: 12px;
    		color: #49454f;
    		font-weight: 500;
    		text-align: left;
  	}
  	.priceContainer {
    		display: flex;
    		align-items: center;
    		gap: 5px;
  	}
  	.inputChip {
    		height: 58px;
    		width: 89px;
    		border-radius: 8px;
    		border: 1px solid #707975;
    		box-sizing: border-box;
    		overflow: hidden;
    		flex-shrink: 0;
    		display: flex;
    		align-items: center;
    		justify-content: center;
    		font-size: 16px;
    		color: #49454f;
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
  	.ingredientToSellChild {
    		height: 60px;
    		width: 60px;
    		border-radius: 15px;
  	}
  	.button {
    		overflow: hidden;
    		display: flex;
    		align-items: center;
    		justify-content: center;
    		padding: 10px;
    		flex-shrink: 0;
    		font-size: 30px;
    		color: #fff;
  	}
  	.submitButton {
    		height: 62px;
    		width: 150px;
    		position: relative;
    		border-radius: 25px;
    		background-color: #cd471f;
    		overflow: hidden;
    		flex-shrink: 0;
    		cursor: pointer;
    		transition: opacity 0.2s;
  	}
  	.submitButton:active {
    		opacity: 0.8;
  	}
  	.invia {
    		position: absolute;
    		top: 8px;
    		left: calc(50% - 69px);
    		line-height: 28px;
    		display: flex;
    		align-items: center;
    		justify-content: center;
    		width: 139px;
    		height: 45px;
  	}
  	.priceInput {
    		height: 50px;
    		width: 70px;
    		border-radius: 8px;
    		border: 1px solid #707975;
    		box-sizing: border-box;
    		padding: 6px 12px;
    		font-size: 16px;
    		color: #49454f;
    		font-family: Roboto;
    		text-align: center;
  	}
	.priceInput::-webkit-outer-spin-button,
	.priceInput::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
	}
	.priceInput[type="number"] {
			appearance: textfield;
			-moz-appearance: textfield;
	}
	.euro {
    		font-size: 18px;
    		color: #49454f;
  	}
  	.dateInput {
    		height: 50px;
    		width: 120px;
    		border-radius: 8px;
    		border: 1px solid #707975;
    		box-sizing: border-box;
    		padding: 6px 12px;
    		font-size: 14px;
    		color: #49454f;
        background-color: white;
    		font-family: Roboto;
  	}
  	.imageLabel {
    		cursor: pointer;
  	}
  	.fileInput {
    		display: none;
  	}
  	.imageButton {
    		height: 50px;
    		width: 50px;
    		border-radius: 8px;
    		background-color: white;
    		border: 1px solid #707975;
    		display: flex;
    		align-items: center;
    		justify-content: center;
    		transition: background-color 0.2s;
    		overflow: hidden;
  	}
  	.imageButton:hover {
    		background-color: #d1d3d1;
  	}
  	.cameraIcon {
    		height: 30px;
    		width: 30px;
    		filter: invert(30%);
  	}
  	.photoPreview {
    		width: 100%;
    		height: 100%;
    		object-fit: cover;
  	}

</style>
