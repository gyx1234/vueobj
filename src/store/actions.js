import * as types from './types'
export default {
    showLoading:({
        commit,state
    })=>{
        commit(types.SHOW_LOADING);
    },
    hideLoading:({
        commit,state
    })=>{
        commit(types.HIDE_LOADING);
    }
}

