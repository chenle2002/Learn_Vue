<template>
  <h1>当前求和为:{{ sum }}</h1>
  <button @click="sum++">点我加一</button>
  <hr/>
  <h2>当前点击时鼠标的坐标为x:{{ point.x }}, y:{{ point.y }}</h2>
</template>

<script>
import {ref, reactive} from 'vue';
import usePoint from "@/hooks/usePoint";
export default {

  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Demo',
  setup() {
    let sum = ref(0)
    let point = reactive({
      x: 0,
      y: 0
    })

    point = usePoint()

    return {
      sum,
      point
    }
  },
}
</script>

<style>
</style>
