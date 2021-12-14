
<template>
  <div id="app">
<input type="text" v-model="userName" placeholder="Login">
<input type="text" v-model="userPass" placeholder="hasło">
<button @click="but">test</button>
<div>{{ usersName }}</div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'Home',
  components: {},
  data: () => ({
     userName: '',
     userPass: '',
     usersName: ''
  }),
  mounted(){
  this.usersName = this.$store.getters.getUsersName
  },
   methods: {
     ...mapActions([
       'setLogged', // map `this.increment()` to `this.$store.dispatch('increment')`
     ]),
    but(){
      if(this.userName=="test" && this.userPass=="test"){
        this.setLogged(this.userName)
        this.$router.push("/Tlog")
      }else{
        this.$router.push("/Flog")
      }

    }
  }

  }

</script>


