<template>
  <ul>
    <li>消息编号:{{ id }}</li>
    <li>消息标题:{{ title }}</li>
  </ul>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Details",
  props:['id','title'],
}
</script>

<style scoped>

</style>
