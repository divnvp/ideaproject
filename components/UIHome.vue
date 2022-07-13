<template>
  <div class="home">
    <div class="home-col">
      <div class="home-row">
        <span class="home-title">
          Добавление товара
        </span>

        <UISelector class="home-selector" />
      </div>

      <div class="home-row">
        <div class="home-col">
          <UICard class="home-card">
            <template #content>
              <UIInput
                title="Наименование товара"
                placeholder="Введите наименование товара"
              />

              <UITextarea
                title="Описание товара"
                placeholder="Введите описание"
              />

              <UIInput
                title="Ссылка на изображение товара"
                placeholder="Введите ссылку"
              />

              <UIInput
                title="Цена товара"
                placeholder="Введите цену"
              />

              <UIButton
                class="home-card__button"
                title="Добавить товар"
                :disabled="true"
              />
            </template>
          </UICard>
        </div>

        <div class="home-col home-product">
          <UICard
            class="home-product__card home-col"
            v-for="product in 12"
            :key="product"
          >
            <template #content>
              <ProductCard />
            </template>
          </UICard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UISelector from "./UISelector";
import UICard from "./card/UICard";
import UIButton from "./UIButton";
import ProductCard from "~/components/card/ProductCard";

export default {
  name: 'UIHome',
  components: { ProductCard, UIButton, UICard, UISelector },
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  flex: 1 1 0;

  margin: 32px;

  &-col {
    display: flex;
    flex-direction: column;
  }

  &-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  &-title {
    font-size: 28px;
    color: #3F3F3F;
    margin-bottom: 16px;
  }

  &-selector {
    margin-right: 32px;
  }

  &-card {
    position: sticky;
    top: 0;

    width: 332px;
    height: 440px;

    padding: 24px;

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1 1 0;

      margin-top: calc(24px - 16px);

      width: 100%;
      height: 36px;
    }
  }

  &-product {
    display: flex;
    flex-flow: row wrap;
    flex: 1 1 0;
    cursor: pointer;

    &__card {
      margin: 8px 16px;

      width: 332px;
      height: 423px;
    }
  }
}
</style>
