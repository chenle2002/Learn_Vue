<template>
  <h2>sum: {{sum}}</h2>
  <button @click="sum++">点我加一</button>
  <hr/>
  <h2>当前的信息为:{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr/>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪资:{{ person.job.j1.salary }}K</h2>
  <button @click="person.name = person.name + '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">增长薪资</button>
</template>

<script>
import { ref,watch,reactive } from 'vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Demo',
  setup(){
    let sum = ref(0);
    let msg = ref('你好')
    let person = reactive({
      name: '张三',
      age: 18,
      job:{
        j1:{
          salary: 20
        }
      }
    })


    // watch(sum,(newv,oldv)=>{
    //     console.log('sum的值发生变化了');
    //     console.log(`newValue:${newv}, oldValue:${oldv}`);
    // },{immediate: true})

    // 情况二:监视ref所定义的多个响应式数据
    // watch([sum, msg], (nv, ov) => {
    //   //此时nv和ov都是被监视属性值的数组
    //   // console.log(Array.isArray(ov)); //true
    //   console.log('sum的值或者msg的值发生变化了');
    //   console.log(`newValue:${nv}, oldValue:${ov}`);
    // },{
    //   immediate: true
    // });
    /**
     * 情况三:监视reactive所定义的一个响应式数据
     * 坑:1.此处无法获取正确的ov(oldValue)
     *    2.强制开启了深度监视
     */
    // watch(person, (nv, ov) => {
    //   console.log('person变化了');
    //   console.log(nv);
    //   console.log(ov);
    // }, {
    //   deep: false //此处的deep配置是无效的
    // });

    //情况四：监视reactive所定义的响应式中的某一个属性
    // watch(() => person.age, (nv, ov) => {
    //   console.log('person的age变了', nv, ov);
    // })

    //情况五:监视reactive所定义的响应式中的某些属性:并不只是一个
    watch([() => person.age, () => person.name], (nv, ov) => {
      //此时nv和ov都是数组
      console.log('person的age或name发生改变了',nv, ov);
    });

    // //特殊情况
    // watch(() => person.job, (nv, ov) => {
    //   //这里依然无法拿到正确的ov，因为依然监视的是对象
    //   console.log('person的job信息发生改变了',nv, ov);
    // }, {
    //   //这里必须要加deep:true注意
    //   deep: true //此处因为监视的是reactive所定义的响应式对象的一个属性(这个属性的值它依然是一个对象)，所以deep配置有效
    // })
    return {
      sum,
      msg,
      person
    }
  }
}
</script>

<style>
</style>
