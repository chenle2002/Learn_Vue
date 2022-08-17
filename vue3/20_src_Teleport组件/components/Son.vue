<template>
  <div class="son">
    <h2>son(孙)</h2>
    <Dialog/>
  </div>
</template>

<script>
import Dialog from "./Dialog";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Son",
  components: {Dialog}
}
</script>

<style scoped>
  .son{
    background: orange;
    padding: 10px;
  }
</style>
