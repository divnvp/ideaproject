<template>
  <div class="home">
    <div class="home-col">
      <span class="home-title">
        Добавление товара
      </span>

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

    <div class="home-col">
      <slot class="home-product" name="products" />
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
  flex-direction: row;
  flex: 1 1 0;

  margin: 32px;

  &-col {
    display: flex;
    flex-direction: column;
  }

  &-title {
    font-size: 28px;
    color: #3F3F3F;
  }

  &-card {
    width: 332px;
    height: 440px;

    padding: 24px;

    &__span {
      margin-top: 16px;

      font-size: 10px;
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
    margin-left: 16px;
  }
}
</style>
