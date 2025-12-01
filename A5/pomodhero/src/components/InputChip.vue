<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "48px",
    },
    textAlign: {
      type: String,
      default: "left",
    },
    borderColor: {
      type: String,
      default: "#cac4d0",
    },
    step: {
      type: String,
      default: undefined,
    },
    min: {
      type: String,
      default: undefined,
    },
    noBorder: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<template>
  <input
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
    :step="step"
    :min="min"
    :class="$style.inputChip"
    :style="{
      width: width,
      height: height,
      textAlign: textAlign,
      borderColor: noBorder ? 'transparent' : borderColor,
      border: noBorder ? 'none' : undefined,
      padding: noBorder ? '0' : undefined,
    }"
    @input="updateValue"
  />
</template>

<style module>
.inputChip {
  border-radius: 8px;
  border: 1px solid #cac4d0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 6px 12px;
  font-size: 16px;
  color: #1d1b20;
  font-family: Roboto;
  background: transparent;
  outline: none;
}
.inputChip::placeholder {
  color: #49454f;
  opacity: 0.7;
  text-align: inherit;
}
.inputChip:focus {
  border-color: #6750a4;
  outline: none;
}

/* Rimuove le frecce sui campi number */
.inputChip::-webkit-outer-spin-button,
.inputChip::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.inputChip[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>
