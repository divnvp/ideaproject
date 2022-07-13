<template>
  <div class="custom-textarea">
    <span class="custom-textarea__span">{{ title }}</span>
    <textarea
      class="custom-textarea__textarea"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "UITextarea",

  props: {
    title: String,
    placeholder: String
  }
}
</script>

<style lang="scss" scoped>
.custom-textarea {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 284px;

  &__span {
    margin-bottom: 4px;

    font-size: 10px;
    font-weight: 400;
    color: #49485E;
  }

  &__textarea {
    height: 108px;

    border: none;
    background: #FFFEFB;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    resize: none;

    padding: 10px;

    &::placeholder {
      font-family: Arial, serif;
      font-size: 12px;
      color: #B4B4B4;
    }
  }
}
</style>
