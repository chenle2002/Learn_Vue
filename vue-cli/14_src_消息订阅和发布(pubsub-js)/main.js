//引入Vue
import Vue from "vue";
//引入App
import App from './App';

//关闭Vue的生产提示
Vue.config.productionTip = false;

//创建一个vc
// const Demo = Vue.extend({}); //demo 傀儡不需要配置对象
//
// const d = new Demo(); //此时这个d就是组件实例对象 => vc

// Vue.prototype.x = d;

new Vue({
    el:'#app',
    render: h => h(App),
});
