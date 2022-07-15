<template>
  <div>
    <select
      class="select"
      v-model="selectedOption"
      :style="{ height }"
    >
      <option
        v-for="option in options"
        :key="option.name"
        :value="option.name"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "UISelector",

  props: {
    options: { type: Array, required: true },
    height: String
  },

  computed: {
    selectedOption: {
      get() {
        return this.options[0].name;
      },
      set(newValue) {
        this.$emit("update", newValue);
      }
    }
  }
};
</script>

<style scoped>
.select {
  border: none;

  padding: 10px;

  background: #FFFEFB;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  color: #B4B4B4;
  font-size: 12px;
}
</style>
