<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow" key="1">你好!</h1>
      <h1 v-show="isShow" key="2">傻逼云大</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Test3",
  data(){
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
  h1{
    background: orange;
  }
</style>
