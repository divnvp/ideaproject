<template>
  <div class="card">
    <slot name="content" />
  </div>
</template>

<script>
export default {
  name: "UICard"
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;

  border-radius: 4px;
  background-color: #FFFEFB;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);

  &:hover {
    background-color: #EEEEEE;
  }
}
</style>
