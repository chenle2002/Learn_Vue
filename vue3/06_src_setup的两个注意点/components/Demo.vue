<template>
  <!--vue3的组件模版结构可以没有根标签-->
  <h1>我是app组件</h1>
  <h1>我叫{{ person.name }}, {{ person.age }}岁</h1>
  <button @click="test">测试触发一次demo的自定义事件</button>
</template>

<script>
import { reactive } from 'vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Demo',
  beforeCreate() {
    console.log('----@bc');
  },
  props: ['msg', 'school'],
  emits:['hello'],
  setup(props, context){
    // console.log('----setup');
    // console.log(this); ///undefined
    console.log(props); //props: 外部给组件丢的参数 => 响应式(Proxy实例)
    let person = reactive({
      name: 'py',
      age: 21,
    });

    // console.log(context, context.attrs); 相当于vue2中的$attrs
    // console.log(context,context.slots); 插槽

    //返回一个对象
    return {
      person,
      test(){
        context.emit('hello', 666); //触发自定义事件
      }
    }
  }
}
</script>

<style>
</style>
