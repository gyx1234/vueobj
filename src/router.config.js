import home from './component/home.vue';
import huodong from './component/huodong.vue';
import changjing from './component/changjing.vue';
import pinpai from './component/pinpai.vue';
import yuyue from './component/yuyue.vue';
import zuopin from './component/zuopin.vue';
import error from './component/error.vue';

const routes=[
    {path:'/home',component:home},
    {path:'/changjing',component:changjing},
    {path:'/huodong',component:huodong},
    {path:'/pinpai',component:pinpai},
    {path:'/yuyue',component:yuyue},
    {path:'/zuopin',component:zuopin},
    {path:'/',redirect:'/home'},
    {path:'*',component:error},
];
export default{
    routes
}

