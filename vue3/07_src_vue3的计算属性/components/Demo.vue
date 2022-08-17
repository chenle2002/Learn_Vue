<template>
  <input type="text" v-model="person.first"/>
  <br>
  <input type="text" v-model="person.last"/>
  <br>
  <span>{{person.fullName}}</span>
  <br/>
  修改全名:<input type="text" v-model="person.fullName"/>
</template>

<script>
import { reactive,computed } from 'vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Demo',
  setup(){
    let person = reactive({
      first: '张',
      last: '三',
    });

    //计算属性(简写，没有考虑计算属性被修改的情况)
    person.fullName = computed( {
      get(){
        return person.first + '-' + person.last
      },
      set(name){
        let [ fn, ln ] = name.split('-');
        //响应式
        person.first = fn;
        person.last = ln;
      }
    })

    return {
      person
    }
  }
}
</script>

<style>
</style>
