<template>
  <div>
  
  </div>
</template>
<script>
import { useCookies } from 'vue3-cookies';
const {cookies} = useCookies()


export default {
  methods:{
    logout(){
      this.$store.dispatch("logout")
    }
  },
  // computed: {
  //     user() {
  //       return this.$store.state.user ||
  //       cookies.get("LegitUser")
  //     },
  //     result() {
  //       return this.user?.result;
  //     },
  //     isAdmin() {
  //       return this.result?.UserRole?.toLowerCase() === "admin";
  //     },
  //   }
};
</script>
<style  scoped>

</style>
