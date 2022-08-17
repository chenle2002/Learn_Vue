/**
 * 该文件用于创建vuex中最核心的store
 */

//引入Vuex
import Vuex from 'vuex';
import Vue from "vue";
import count from "@/store/count";
import person from "@/store/person";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        count,
        person
    }
});







