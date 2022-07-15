<template>
  <div class="custom-input">
    <div class="custom-input__row">
      <span class="custom-input__span">{{ title }}</span>
      <span
        class="custom-input__required"
        v-if="required"
      />
    </div>

    <input
      class="custom-input__input"
      v-model="nameField"
      :placeholder="placeholder"
      :style="isFieldRequired ?
      'border: 1px solid tomato' : null"
    >

    <span
      class="custom-input__hint"
      v-if="isFieldRequired"
    >
      Поле является обязательным
    </span>
  </div>
</template>

<script>
export default {
  name: "UIInput",

  props: {
    title: String,
    placeholder: String,
    type: String,
    required: Boolean
  },

  data: () => ({
    formattedPrice: ""
  }),

  computed: {
    nameField: {
      get() {
        return this.formattedPrice;
      },
      set(newValue) {
        newValue = newValue.toString()
          .replaceAll(" ", "");
        this.formattedPrice = newValue
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

        this.$emit("update", newValue);
      }
    },

    isFieldRequired() {
      return this.required && !this.nameField.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 284px;

  &__row {
    display: flex;
    flex-direction: row;
  }

  &__span {
    font-size: 10px;
    font-weight: 400;
    color: #49485E;
  }

  &__required {
    width: 4px;
    height: 4px;

    background: #FF8484;
    border-radius: 4px;
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

    &:active {
      background-color: white;
    }

    &:focus {
      outline: none;
    }
  }

  &__hint {
    margin-top: 4px;
    margin-bottom: -16px;

    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;

    color: #FF8484;
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
</style>
