<template>
    <!-- <NavBarComp/> -->
    <NavBarVue/>
    <router-view/>
    <FooterComp/>
</template>

<script>

// import NavBarComp from '@/components/navBarComp.vue'
import FooterComp from '@/components/footercomp.vue'
import NavBarVue from './components/NavBar.vue'
export default {
 components:  {NavBarVue, FooterComp}
}

</script>
<style>

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: aqua;
}


</style>
