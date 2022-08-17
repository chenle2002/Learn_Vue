<template>
  <div>
    <h1>人员列表</h1>
    <h2 style="color:skyblue">Count组件求和为:{{ sum }}</h2>
    <h3 style="color:skyblue">列表中第一个人的名字:{{ firstname }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个人名字随机</button>

    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
// import {mapState} from "vuex";
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
    sum(){
      return this.$store.state.count.sum
    },
    personList(){
      return this.$store.state.person.personList
    },
    firstname() {
      return this.$store.getters['person/firstname']
    },

  },
  methods:{
    add(){
      const obj = {
        name:this.name,
        id:nanoid()
      }
      this.name = ''
      this.$store.commit('person/ADD',obj)
    },
    addWang(){
      const obj = {
        name:this.name,
        id:nanoid()
      }
      this.name = ''
      this.$store.dispatch('person/addwang',obj)
    },
    addPersonServer(){
      this.$store.dispatch('person/addPersonServer');
}
  }
}
</script>

<style scoped>
button{
  margin-left: 5px;
}
</style>
