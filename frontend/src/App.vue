<template>
   <NavBarComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>

import NavBarComp from '@/components/navBarComp.vue'
import FooterComp from '@/components/footercomp.vue'
export default {
 components:  {NavBarComp, FooterComp}
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
