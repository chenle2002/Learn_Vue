<template>
   <div >
     <h2 @click="showName">学校名称:{{  name }}</h2>
     <h2>学校地址: {{ address }}</h2>
   </div>
</template>

<script>
//引入一个混合
import {mixin,mixin2} from "@/mixin";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  data() {
    console.log(this);
    return {
      name: '云南大学',
      address: '云南昆明',
      x:5
    }
  },
  mounted() {
    console.log('你好啊啊！！！！')  //但对于生命周期钩子是都会保存的(混合的钩子比你配置的钩子先跑)
  },
  mixins: [mixin,mixin2]
}
</script>

