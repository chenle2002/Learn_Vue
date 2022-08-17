<template>
  <div>
    <h1>人员列表</h1>
    <h2 style="color:skyblue">Count组件求和为:{{ sum }}</h2>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {nanoid} from "nanoid";
export default {
  //计数组件
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Count",
  data(){
    return {
      n: 1,// 代表用户在select框开始的时候选择的数字
      name:''
    }
  },
  computed:{
    ... mapState(['sum','personList']),
  },
  methods:{
    add(){
      const obj = {
        name:this.name,
        id:nanoid()
      }
      this.name = ''
      this.$store.commit('ADD',obj)
    }
  }
}
</script>

<style scoped>
button{
  margin-left: 5px;
}
</style>
