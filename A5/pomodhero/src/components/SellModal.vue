<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      prices: {},
    };
  },
  mounted() {
    this.items.forEach((item, index) => {
      this.prices[index] = '';
    });
  },
  methods: {
    handleSubmit() {
      const result = this.items.map((item, index) => ({
        name: item.name,
        quantity: item.quantity,
        price: parseFloat(this.prices[index]) || 0,
      }));
      this.$emit('submit', result);
    },
    handleClose() {
      this.$emit('close');
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
          <div :class="$style.ingredient1">{{ item.name }}</div>
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
      <div :class="$style.button">
        <div :class="$style.submitButton" @click="handleSubmit">
          <b :class="$style.invia">Invia</b>
        </div>
      </div>
    </div>
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
    		overflow: hidden;
    		display: flex;
    		align-items: center;
    		padding: 21px 44px;
    		gap: 10px;
  	}
  	.ingredient1 {
    		align-self: stretch;
    		width: 174px;
    		position: relative;
    		letter-spacing: 0.1px;
    		line-height: 20px;
    		display: flex;
    		align-items: center;
    		justify-content: center;
    		flex-shrink: 0;
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
    		height: 58px;
    		width: 89px;
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
    		font-size: 20px;
    		color: #49454f;
  	}

</style>
