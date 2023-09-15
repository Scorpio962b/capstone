<template>
  <nav class="navbar fixed-top">
  <div class="container-fluid">
      <router-link class="navbar-brand" to="/"><img src="https://i.postimg.cc/02Ys2Qw6/logonew.jpg" class="logo" alt="logo"></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">HealthRun</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
      <div class="offcanvas-body">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link to="/profile" ><font-awesome-icon :icon="['fas', 'user']" /></router-link> |
          </li>
          <li class="nav-item">
            <router-link to="/">Home</router-link> |
          </li>
          <li class="nav-item">
            <router-link to="/about">About</router-link> |
          </li>
          <li class="nav-item">
            <router-link to="/products">products</router-link> |
          </li>
          <li class="nav-item">
            <router-link to="/admin">Admin</router-link> |
          </li>
          <li class="nav-item">
            <router-link to="/cart">Cart</router-link> |
          </li>
          <li class="nav-item">
            <router-link to="/login">login</router-link> |
          </li>
          <li class="nav-item">
            <router-link to="/register">register</router-link> |
          </li>
          <li class="nav-item">
            <router-link to="/login" @click="logout">Logout</router-link> |
          </li>
      </ul>
          </div>
      </div>
  </div>
  </nav>
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

  <style scoped>
  .logo{
  width: 90px;
  height: 90px;
  border-radius: 70px;
}
  </style>
