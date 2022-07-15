<template>
  <div class="product-card">
    <div class="product-card__button-container">
      <UIButton
        class="product-card__button"
        color="#FF8484"
        @press="$emit('delete', product)"
      >
        <template>
          <img
            class="product-card__button-img"
            src="/delete.png"
            alt="Delete icon"
          >
        </template>
      </UIButton>
    </div>

    <img
      class="product-card__img"
      :src="product.link || '/img.png'"
      alt="Product image"
    >

    <div class="product-card__content">
      <span class="product-card__span product-card__col">
        {{ product.name }}
      </span>

      <span class="product-card__description product-card__col">
        {{ product.description }}
      </span>

      <span class="product-card__price product-card__col">
        {{ product.price }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",

  props: {
    product: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &__col {
    display: flex;
    flex-direction: column;
  }

  &__button {
    visibility: hidden;

    &-container {
      display: flex;
      flex-direction: row-reverse;
    }

    position: absolute;

    margin-right: -10px;
    margin-top: -10px;

    z-index: 999;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    &-img {
      width: 16px;
      height: 16px;
    }
  }

  &__img {
    width: 100%;
    height: 200px;
  }

  &__span {
    font-size: 20px;
    color: #3F3F3F;
    font-weight: 600;
  }

  &__description {
    margin-top: 16px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: #3F3F3F;
  }

  &__price {
    margin-top: 32px;
    font-size: 24px;
    font-weight: 600;
    color: #3F3F3F;
  }

  &__content {
    padding: 16px;
  }

  &:hover &__button {
    visibility: visible;
  }
}
</style>
