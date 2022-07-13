<template>
  <div>
    <button class="button" :disabled="disabled">
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  name: "UIButton",

  props: {
    title: { type: String },
    disabled: { type: Boolean },
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Inter', serif;
  font-weight: 600;
  font-size: 12px;

  border: none;
  border-radius: 10px;

  width: 100%;
  padding: 10px;

  &:disabled {
    background-color: #EEEEEE;
    color: #B4B4B4;
  }
}
</style>
