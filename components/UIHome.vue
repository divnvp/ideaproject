<template>
  <div class="home">
    <div class="home-col home-justify-content">
      <div class="home-row">
        <span class="home-title">
          Добавление товара
        </span>

        <UISelector
          class="home-selector"
          :options="filteredOptions"
          height="36px"
          @update="filterList"
        />
      </div>

      <div class="home-row">
        <div class="home-col">
          <UICard class="home-card">
            <template #content>
              <UIInput
                title="Наименование товара"
                placeholder="Введите наименование товара"
                @update="checkRequiredName"
                :required="true"
              />

              <UITextarea
                title="Описание товара"
                placeholder="Введите описание"
                @update="checkDescription"
              />

              <UIInput
                title="Ссылка на изображение товара"
                placeholder="Введите ссылку"
                @update="checkRequiredLink"
                :required="true"
              />

              <UIInput
                title="Цена товара"
                placeholder="Введите цену"
                type="number"
                @update="checkRequiredPrice"
                :required="true"
              />

              <UIButton
                class="home-card__button"
                title="Добавить товар"
                @press="addProduct"
                :disabled="isButtonDisabled"
                height="36px"
              />
            </template>
          </UICard>
        </div>

        <div class="home-col home-product">
          <UICard
            class="home-product__card home-col"
            v-for="(product, index) in products"
            :key="index"
          >
            <template #content>
              <ProductCard
                :product="product"
                @delete="deleteProduct(index)"
              />
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

import { sortArray } from "~/factories/sort-array";
import {getProducts} from "~/mocks/getProducts";

export default {
  name: 'UIHome',

  components: { ProductCard, UIButton, UICard, UISelector },

  data: () => ({
    products: [],
    filteredOptions: [
      { name: "default", text: "По умолчанию" },
      { name: "min", text: "По цене min" },
      { name: "max", text: "По цене max" },
      { name: "name", text: "По наименованию" },
    ],

    field: {
      name: "",
      description: "",
      link: "",
      price: ""
    },
  }),

  computed: {
    isButtonDisabled() {
      const { name, link, price } = this.field;

      return !Boolean(name.length && link.length && price.length);
    }
  },

  created() {
    this.getCustomProducts();
  },

  methods: {
    getCustomProducts() {
      this.products = getProducts();

      if (!localStorage.getItem("products") || !localStorage.getItem("products").length) {
        localStorage.setItem("products", JSON.stringify(this.products));
      }

      this.products = JSON.parse(localStorage.getItem("products"));
    },

    checkRequiredName(newValue) {
      if (newValue.length) {
        this.field.name = newValue;
      } else {
        this.field.name = "";
      }
    },

    checkDescription(newValue) {
      if (newValue.length) {
        this.field.description = newValue;
      } else {
        this.field.description = "";
      }
    },

    checkRequiredLink(newValue) {
      if (newValue.length) {
        this.field.link = newValue;
      } else {
        this.field.link = "";
      }
    },

    checkRequiredPrice(newValue) {
      if (newValue.length || +newValue > 0) {
        this.field.price = newValue;
      } else {
        this.field.price = "";
      }
    },

    addProduct() {
      const { name, description, link, price } = this.field;
      this.products.push({ name, description, link, price });

      localStorage.setItem("products", JSON.stringify(this.products));
      this.cleanFields();
    },

    deleteProduct(index) {
      // const index = this.products.findIndex(pr => pr.name === product.name);
      this.products.splice(index, 1);

      localStorage.setItem("products", JSON.stringify(this.products));
    },

    cleanFields() {
      this.field.name = "";
      this.field.description = "";
      this.field.link = "";
      this.field.price = "";
    },

    filterList(value) {
      if (value === "default") {
        this.products = JSON.parse(localStorage.getItem("products"));
      } else {
        sortArray(value, this.products);
      }
    }
  }
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

  &-justify-content {
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
