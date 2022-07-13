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
              <span class="home-card__span">Наименование товара</span>
              <input
                class="home-card__input"
                placeholder="Введите наименование товара"
              >

              <span class="home-card__span">Описание товара</span>
              <textarea
                class="home-card__textarea"
                placeholder="Введите описание"
              />

              <span class="home-card__span">Ссылка на изображение товара</span>
              <input
                class="home-card__input"
                placeholder="Введите ссылку"
              >

              <span class="home-card__span">Цена товара</span>
              <input
                class="home-card__input"
                placeholder="Введите цену"
              >

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
              <div>
                <img
                  class="product-card__img"
                  src="../static/img.png"
                  alt="Product image"
                >

                <div class="product-card__content">
                  <span class="product-card__span home-col">
                    Наименование товара
                  </span>

                  <span class="product-card__description home-col">
                    Довольно-таки интересное
                    описание товара в несколько строк.
                    Довольно-таки интересное описание товара
                    в несколько строк
                  </span>

                  <span class="product-card__price home-col">
                    10 000 руб.
                  </span>
                </div>
              </div>
            </template>
          </UICard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
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

    &__span {
      margin-top: 16px;

      font-size: 10px;
      color: #49485E;
    }

    &__input {
      margin-top: 4px;
      padding: 16px;

      border: none;
      background: #FFFEFB;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;

      &::placeholder {
        font-size: 12px;
        color: #B4B4B4;
      }
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
        font-size: 12px;
        color: #B4B4B4;
      }
    }

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1 1 0;

      margin-top: 24px;

      width: 100%;
      height: 36px;
    }
  }

  &-product {
    display: flex;
    flex-flow: row wrap;
    flex: 1 1 0;

    &__card {
      margin: 8px 16px;

      width: 332px;
      height: 423px;
    }
  }
}

.product-card {
  color: #3F3F3F;

  &__img {
    width: 100%;
    height: 200px;
  }

  &__span {
    font-size: 20px;
  }

  &__description {
    margin-top: 16px;
    font-size: 16px;
  }

  &__price {
    margin-top: 32px;
    font-size: 24px;
  }

  &__content {
    padding: 16px;
  }
}
</style>
