<template>
   <div >
     <h2 @click="showName">姓名:{{  name }}</h2>
     <h2>性别: {{ sex }}</h2>
   </div>
</template>

<script>

import {mixin} from "@/mixin";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data(){
    console.log(this);
    return {
       name: '张三',
       sex: '男',
    }
  },
  mixins:[mixin]
}

</script>

