<template>
  <!--vue3的组件模版结构可以没有根标签-->
  <h1>我叫{{ name }}</h1>
  <h1>{{ age }}岁</h1>
  <h3>职位:{{ job.type }}</h3>
  <h3>薪水:{{ job.salary }}</h3>
  <button @click="change">点我改变数据</button>
</template>

<script>
import {ref} from 'vue';
export default {
  name: 'App',
  setup() {
    //表演的舞台
    //准备数据 data
    let name = ref('py');
    let age = ref(25);

    let job = ref({
          type :'前端工程',
          salary:250
    })
    function change(){
      name.value = '123';
      age.value = 21;
      job.value.type = '后端工程师'
    }

    return {
      name,
      age,
      change,
      job
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
