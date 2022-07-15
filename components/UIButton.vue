<template>
  <div>
    <button
      class="button"
      :disabled="disabled"
      @click="$emit('press')"
      :style="{ backgroundColor: color, height: height }"
    >
      {{ title }}

      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: "UIButton",

  props: {
    color: String,
    title: String,
    disabled: Boolean,
    required: Boolean,
    height: String
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Arial, serif;
  font-weight: 600;
  font-size: 12px;

  border: none;
  border-radius: 10px;

  width: 100%;
  padding: 10px;

  cursor: pointer;

  background-color: #7BAE73;
  color: white;

  &:disabled {
    background-color: #EEEEEE;
    color: #B4B4B4;

    cursor: default;
  }
}
</style>
