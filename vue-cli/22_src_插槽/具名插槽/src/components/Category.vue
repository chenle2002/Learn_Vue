<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!--插槽,等着组件的使用者进行填充-->
    <slot name="center">请传入内容1</slot>
    <slot name="footer">请传入内容2</slot>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Category",
  props:['title']
}
</script>

<style scoped>
.category{
  background: skyblue;
  width: 200px;
  height: 300px;
}
h3{
  text-align: center;
  background: orange;
}
img{
  width: 100%;
}
</style>
