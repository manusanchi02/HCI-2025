<script>
export default {
  props: {
    modelValue: {
      type: String,
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
    :class="$style.inputChip"
    @input="updateValue"
  />
</template>

<style module>
.inputChip {
  width: 359px;
  height: 48px;
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
}
.inputChip:focus {
  border-color: #6750a4;
  outline: none;
}
</style>
