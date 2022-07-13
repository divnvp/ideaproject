<template>
  <div class="custom-input">
    <span class="custom-input__span">{{ title }}</span>
    <input
      class="custom-input__input"
      :placeholder="placeholder"
    >
  </div>
</template>

<script>
export default {
  name: "UIInput",

  props: {
    title: { type: String },
    placeholder: { type: String },
  }
}
</script>

<style lang="scss" scoped>
.custom-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 284px;

  &__span {
    font-size: 10px;
    font-weight: 400;
    color: #49485E;
  }

  &__input {
    margin-top: 4px;
    padding: 8px 16px;

    border: none;
    background: #FFFEFB;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    transition: background-color 0.5s linear;

    &::placeholder {
      font-size: 12px;
      color: #B4B4B4;
    }

    &:hover {
      background-color: #EEEEEE;
      transition: background-color 0.1s linear;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
