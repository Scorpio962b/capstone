<template>
  <div>
    <router-link to="/profile" ><font-awesome-icon :icon="['fas', 'user']" /></router-link> |
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <!-- <router-link to="/contact">Contact</router-link> -->
    <router-link to="/products">products</router-link> |
    <router-link to="/admin" >Admin</router-link> |
    <router-link to="/cart">Cart</router-link> |
    <router-link to="/login">login</router-link> |
    <router-link to="/register">register</router-link> |
    <router-link to="/login" @click="logout">Logout</router-link> |
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
