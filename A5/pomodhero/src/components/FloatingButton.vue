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
  },
};
</script>

<template>
  <div :class="$style.floatingButton">
    <div :class="[$style.roundButton, { [$style.active]: active }]" @click="onClick">
      <img :src="icon" alt="" />
    </div>
  </div>
</template>

<style module>
.floatingButton {
  align-self: stretch;
  background-color: #f2f4f2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
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
  transition: opacity 0.2s;
}
.roundButton:active {
  opacity: 0.8;
}
.roundButton.active {
  background-color: #1d1b20;
}
</style>
