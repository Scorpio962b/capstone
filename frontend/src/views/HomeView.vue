<template>
  <div class="hero">
    <video autoplay loop muted plays-inline>
      <source src="https://cdn.pixabay.com/vimeo/503971812/pills-55713.mp4?width=640&hash=f816bedbab431fd0f99969d25cfa3982d91e73c8">
    </video>
    <div class="cont">
      <h1>We don't only find cures, we save lives</h1>
      <button><a href="">Explore more</a></button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style>
.hero {
  width: 100%;
  height: 100vh;
  background-color: blueviolet;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>