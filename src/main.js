import Vue from 'vue';
import App from './App.vue';
import './templets/m2013/css/mainCssRed.css';

import axios from 'axios';
Vue.prototype.$http=axios;

//引入路由
import VueRouter from 'Vue-router';
//安装路由
Vue.use(VueRouter);

//导入
import routes from './router.config';
const router = new VueRouter(routes);//引入一个对象

//引入状态管理
import store from './store';

//引入loading组件（插件）,并安装
import loading from './component/loading'
Vue.use(loading);

new Vue({
  el: '#app',
  render: h => h(App),
    router,  //路由--挂载
    store
});
