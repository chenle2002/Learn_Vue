<template>
  <input v-model="keyWord"/>
  <h3>{{ keyWord }}</h3>
</template>

<script>
import {customRef} from 'vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Demo',
  setup() {

    function myref(value) {
      return customRef((track,trigger) => {
        let timer;
        return {
          get() {
            console.log(`从myRef这个容器读取数据,data:${value}`);
            track()
            return value; //读取的时候就会调用get
          },
          set(newvalue) {
            console.log(`myRef容器中的数据被修改,data改为${newvalue}`);
            clearTimeout(timer);
            timer = setTimeout(()=>{
              value=newvalue
              trigger()
            },500)
          }
        }
      })
    }
    let keyWord = myref('hello')
    return {
      keyWord
    }
  }
}
</script>

<style>
</style>

