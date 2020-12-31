import Vue from "vue"
import Vuex from "Vuex"
import mutations from './mutations'
import actions from './action'



Vue.use(Vuex)

const getters = {

}

const state = {
    userInfo:null, // 获取用户信息
}

export default  new Vuex.Store({
    state,
    actions,
    getters,
    mutations   
})






