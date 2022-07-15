<template>
  <div class="home">
    <div class="home-col home-justify-content">
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
                @update="checkRequiredName"
                :required="true"
              />

              <UITextarea
                title="Описание товара"
                placeholder="Введите описание"
                @update="checkRequiredDescription"
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
            v-for="product in products"
            :key="product.name"
          >
            <template #content>
              <ProductCard
                :product="product"
                @delete="deleteProduct"
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

export default {
  name: 'UIHome',

  components: { ProductCard, UIButton, UICard, UISelector },

  data: () => ({
    products: [
      {
        name: "Наименование товара",
        description: "Довольно-таки интересное\n" +
          "        описание товара в несколько строк.\n" +
          "        Довольно-таки интересное описание товара\n" +
          "        в несколько строк",
        link: "",
        price: "10 000 руб."
      }
    ],
    field: {
      name: "",
      description: "",
      link: "",
      price: ""
    },
    productName: ""
  }),

  computed: {
    isButtonDisabled() {
      const { name, link, price } = this.field;

      return !Boolean(name.length && link.length && price.length);
    }
  },

  created() {
    if (!localStorage.getItem("products") || !localStorage.getItem("products").length) {
      localStorage.setItem("products", JSON.stringify(this.products));
    }

    this.products = JSON.parse(localStorage.getItem("products"));
  },

  methods: {
    checkRequiredName(newValue) {
      if (newValue.length) {
        this.field.name = newValue;
      } else {
        this.field.name = "";
      }
    },

    checkRequiredDescription(newValue) {
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
    },

    deleteProduct(product) {
      const index = this.products.findIndex(pr => pr.name === product.name);
      this.products.splice(index, 1);

      localStorage.setItem("products", JSON.stringify(this.products));
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
