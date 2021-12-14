import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
    usersName: "",
    usersPass: "",
    isLog: false
}
const mutations = {
    SET_IS_LOGGED() {
        state.isLog = true
    },
    SET_LOGGED_OUT() {
        state.isLog = false
    }  ,
    SET_USER_NAME(state, payload) {
        state.usersName = payload
    }
}

const actions = {
       setLogged(context, payload){
           context.commit("SET_USER_NAME", payload)
       }
}

const getters =      {
    getUsersName: state => state.usersName || 'nie jestes zalogowany'
}



export default new Vuex.Store({
    state,mutations,actions,getters
})
