//引入Vue
import Vue from "vue";
//引入App
import App from './App';

//关闭Vue的生产提示
Vue.config.productionTip = false;


new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate() {
        //此时这个this就是vm，只不过这个时候还并没有去解析模版
        Vue.prototype.$bus = this; //安装全局事件总线
    }
});
