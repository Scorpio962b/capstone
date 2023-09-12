<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <!-- <router-link to="/contact">Contact</router-link> -->
    <router-link to="/products">products</router-link> |
    <router-link to="/admin">Admin</router-link> |
    <router-link to="/cart">Cart</router-link> |
    <router-link to="/login">login</router-link> |
    <router-link to="/register">register</router-link> |
    <router-link to="/login" @click="logout">Logout</router-link> |
  </div>
</template>
<script>
export default {
  methods:{
    logout(){
      this.$store.dispatch("logout")
    }
  }
};
</script>
<style>
</style>