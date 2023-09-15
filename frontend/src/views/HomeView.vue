<template>
  <div class="hero">
    <video
      id="back-video"
      autoplay
      loop
      muted
      src="https://cdn.pixabay.com/vimeo/503971812/pills-55713.mp4?width=640&hash=f816bedbab431fd0f99969d25cfa3982d91e73c8"
      type="video/mp4"
    ></video>

    <div class="cont">
      <h1>We don't only find cures, we save lives</h1>
      <div class="btn">
        <button><a href="./about">Explore more</a></button>
      </div>
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
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.cont {
  background: #394871;
  width: 100%;
  height: 150px;
  align-items: center;
  display: grid;
  justify-content: center;
  align-items: center;
  color: #b8dff0;
  position: absolute;
  top: 80%;
  
}
/* video background */
#back-video {
  height: 100vh;
  width: 100%;
  object-fit: cover;
  position: fixed;
  margin: 0;
  z-index: -1;
}

button {
  text-decoration: none;
  border-radius: 80px;
  font-size: 20px;
  height: 0px;
  border: 2px solid black;
  padding: 12px 68px;
  border-radius: 75px;
  margin-top: 20px;
  width: 10rem;
}

.hero {
  width: 100%;
  height: 100vh;
  background-color: #b8dff0;
  padding: 0 5%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -3;
  padding-top: 8rem;
}
</style>