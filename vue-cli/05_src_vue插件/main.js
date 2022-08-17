//引入Vue
import Vue from "vue";
//引入App
import App from './App';

Vue.config.productionTip = false;
import plugins from './plugins';

//应用插件
Vue.use(plugins)
new Vue({
    el:'#app',
    render: h => h(App)
});
