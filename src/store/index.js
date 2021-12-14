import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usersName: "TEST",
    usersPass: "TEST",
    isLog: false
  },
  mutations: {
 setIsLog(){
   state.isLog = true
 },
 setLogout(){
   state.isLog = false
 }
  },
  getters: {
  getUsersName: state => state.usersName
  }
})