<template>
  <div id="tlog">
  <h1>witaj {{ this.getUsersName }}</h1>
  <router-link to="/">Logout</router-link>
  </div>
</template>

<script>
import { mapGetters} from "vuex";

export default {
  name: 'Tlog',
  components: {},
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'getUsersName',
      // ...
    ])
  }
};
</script>
