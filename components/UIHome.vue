<template>
  <div class="home">
    <div class="home-col">
      <div class="home-row">
        <span class="home-title">
          Добавление товара
        </span>

        <UISelector
          class="home-selector"
          height="36px"
        />
      </div>

      <div class="home-row">
        <div class="home-col">
          <UICard class="home-card">
            <template #content>
              <UIInput
                title="Наименование товара"
                placeholder="Введите наименование товара"
                required="true"
              />

              <UITextarea
                title="Описание товара"
                placeholder="Введите описание"
              />

              <UIInput
                title="Ссылка на изображение товара"
                placeholder="Введите ссылку"
                required="true"
              />

              <UIInput
                title="Цена товара"
                placeholder="Введите цену"
                required="true"
              />

              <UIButton
                class="home-card__button"
                title="Добавить товар"
                :disabled="true"
                height="36px"
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
    margin-right: calc(32px * 2);
  }

  &-card {
    display: flex;
    align-items: center;
    justify-content: center;

    position: sticky;
    top: 0;

    width: calc(332px - 24px * 2);

    padding: 24px;
    margin-right: 8px;

    &__button {
      margin-top: 16px;

      width: 100%;
    }
  }

  &-product {
    display: flex;
    flex-flow: row wrap;
    flex: 1 1 0;

    &__card {
      margin: 8px 8px;

      width: calc(332px - 32px);
      height: 423px;
    }
  }
}
</style>
