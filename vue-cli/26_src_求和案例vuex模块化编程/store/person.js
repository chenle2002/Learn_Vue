import axios from "axios";
import {nanoid} from "nanoid";
export default {
    namespaced:true,
    actions: {
        addwang(context,value){
            if(value.name.indexOf('王') === 0){
                context.commit('ADD',value)
            }
        },
        //联系后端api
        addPersonServer(context){
            axios.get(`https://api.uixsj.cn/hitokoto/get?type=social`)
                .then(res => context.commit('ADD',{
                    id: nanoid(),
                    name: res.data
                }))
                .catch(e => alert(e.message));
        }
    },
    mutations:{
        ADD(state, value){
            state.personList.unshift(value)
        }
    },
    state:{
        school: '傻逼云大',
        subject: '软件工程',
        personList: [
            { id: '001', name: '张三'}
        ],
    },
    getters: {
        firstname(state){
            return state.personList[0].name
        }
    }
}
