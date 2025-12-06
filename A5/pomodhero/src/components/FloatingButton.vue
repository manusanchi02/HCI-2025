<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
    active: {
      type: Boolean,
      default: false,
    },
    bottomOffset: {
      type: String,
      default: '30px',
    },
  },
};
</script>

<template>
  <div :class="[$style.roundButton, { [$style.active]: active }]" @click="onClick" :style="{ bottom: bottomOffset }">
    <img :src="icon" alt="" />
  </div>
</template>

<style module>
.roundButton {
  position: fixed;
  right: 20px;
  height: 60px;
  width: 60px;
  border-radius: 50px;
  background-color: #cd471f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s;
  z-index: 100;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.roundButton:active {
  opacity: 0.8;
}
.roundButton.active {
  background-color: #003027;
}
</style>
