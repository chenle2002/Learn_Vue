//该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";

import Message from "@/pages/Message";
import News from "@/pages/News";
import Bout from "@/pages/Bout";
import Home from "@/pages/Home";
import Details from "@/pages/Details";

//创建并默认暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component: Bout
        },
        {
            path:'/home',
            component: Home,
            children:[
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            path:'details',
                            component:Details
                        }
                    ]
                },
                {
                    path:'news',
                    component:News
                }
            ]
        }
    ]
});

