<template>
   <div >
     <h2>学校名称:{{  name | mySlice }}</h2>
     <h2>学校地址: {{ address }}</h2>
   </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  data() {
    console.log(this);
    return {
      name: '云南大学44862',
      address: '云南昆明',
      x:5
    }
  }
}
</script>

