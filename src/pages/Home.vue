
<template>
  <div id="app">
<input type="text" v-model="userName" placeholder="Login">
<input type="text" v-model="userPass" placeholder="hasło">
<button @click="but">test</button>
<div>{{ usersName }}</div>
  </div>
</template>

<script>
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
    but(){
      if(this.userName=="test" && this.userPass=="test"){
        this.$router.push("/Tlog")
      }else{
        this.$router.push("/Flog")
      }
     
    }
  }

  }

</script>


