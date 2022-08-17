<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader/>
        <List
            :todos="todos"
            :checkTodo="checkTodo"
            :deleteTodo="deleteTodo"
        />
        <MyFooter
            :todos="todos"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import List from "@/components/Category";
import MyFooter from '@/components/MyFooter';
import pubsub from 'pubsub-js';
export default {
  name: "App",
  components:{
    List,
    MyFooter,
    MyHeader
  },
  mounted() {
    pubsub.subscribe('addTodo', (_,todo) => {
      console.log(todo)
      this.todos.unshift(todo)
    });
    this.pubId = pubsub.subscribe('checkTodo', this.checkTodo);
    this.pubId1 = pubsub.subscribe('deleteTodo', this.deleteTodo);
  },
  beforeDestroy() {
    // this.$bus.$off('hello'); //销毁解绑
    //取消订阅
    pubsub.unsubscribe(this.pubId); //取消订阅
    pubsub.unsubscribe(this.pubId1); //取消订阅
  },
  data() {
    return {
      todos: [
        {id: '001', title: '吃饭', done: false},
        {id: '002', title: "睡觉", done: true},
        {id: '003', title: '打代码', done: false}
      ]
      // todos:JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods:{
    checkTodo(_,id){
      const todo = this.todos.find(todo => todo.id === id);
      todo.done = !todo.done;
    },
    deleteTodo(_,id){
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    checkAllTodo(done){
      this.todos.forEach(todo => todo.done = done);
    },
    clearAllDoneTodo(){
      this.todos = this.todos.filter(todo => !todo.done)
    }
  },
  watch:{
    //深度监视
    todos:{
      deep: true, //深度监视当我监视数组中的对象的某个属性的变化它也会产生反应
      handler(newValue) {
        //本地存储存的是key和value都是字符串
        //数据存放在本地存储中
        localStorage.setItem("todos", JSON.stringify(newValue))
      }
    },
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>


