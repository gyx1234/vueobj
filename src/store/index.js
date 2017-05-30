//引入vue
import Vue from 'vue';

//引入vuex
import Vuex from 'vuex';
Vue.use(Vuex);

//引入4个角色
import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
//导出4个角色
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
