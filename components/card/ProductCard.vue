<template>
  <div class="product-card">
    <UIButton color="#FF8484" class="product-card__button">
      <template>
        <img
          class="product-card__button-img"
          src="/delete.png"
          alt="Delete icon"
        >
      </template>
    </UIButton>

    <img
      class="product-card__img"
      src="/img.png"
      alt="Product image"
    >

    <div class="product-card__content">
      <span class="product-card__span product-card__col">
        Наименование товара
      </span>

      <span class="product-card__description product-card__col">
        Довольно-таки интересное
        описание товара в несколько строк.
        Довольно-таки интересное описание товара
        в несколько строк
      </span>

      <span class="product-card__price product-card__col">
        10 000 руб.
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard"
}
</script>

<style lang="scss" scoped>
.product-card {
  &__col {
    display: flex;
    flex-direction: column;
  }

  &__button {
    position: absolute;

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
    font-weight: bold;
  }

  &__description {
    margin-top: 16px;
    font-size: 16px;
    color: #3F3F3F;
  }

  &__price {
    margin-top: 32px;
    font-size: 24px;
    font-weight: bold;
    color: #3F3F3F;
  }

  &__content {
    padding: 16px;
  }
}
</style>
