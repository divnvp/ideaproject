<template>
  <div>
    <select
      class="select"
      :style="{ height }"
    >
      <option selected>По умолчанию</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "UISelector",

  props: {
    height: String
  }
}
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
