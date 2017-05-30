import * as types from './types';
export default {
    [types.SHOW_LOADING]:(state)=>{
        state.bLoading=true;
    },
    [types.HIDE_LOADING]:(state)=>{
        state.bLoading=false;
    },
}