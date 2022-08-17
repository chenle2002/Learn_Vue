<template>
  <div className="child">
    <h2>child(子)</h2>
    {{ sum }}
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Child",
  async setup() {
    let sum = ref(0);

    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          sum
        });
      }, 500)
    })

    return await p;
  }
}
</script>

<style scoped>
.child {
  background: skyblue;
  padding: 10px;
}
</style>
