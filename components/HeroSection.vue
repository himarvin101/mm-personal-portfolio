<script setup lang="ts">
import { ref, reactive } from "vue";
import Typed from 'typed.js'

const positions = reactive(['Software Developer.', 'Video Game Streamer.', 'Front-end Engineer.', 'Project Lead Developer.'])
const initializeTyper = () => {
  new Typed('.typing', {
    strings: positions,
    loop: true,
    smartBackspace: true,
    typeSpeed: 120,
    backSpeed: 20,
    backDelay: 2000
  });
}

onMounted(() => {
  initializeTyper()
})
</script>

<template>
  <div id="hero--section">
    <div class="container relative mx-auto">
      <div class="slogan">
        <h5 class="mb-5">Hi, my name is</h5>
        <h1 class="mb-3">Marvin Marinduque.</h1>
        <h4 class="mb-7">I'm a <span class="typing" /></h4>
        <p>I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accesible, human-centered products at NAP.</p>
        <NuxtLink role="button" class="btn">Check out my work!</NuxtLink>
      </div>

      <img class="hero--me-img absolute bottom-0" src="@/assets/images/MARVZ.png" alt="me" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  #hero--section {
    background: #f1d4af;
    overflow: hidden;
  }

  .hero--me-img {
    right: -285px;
    width: 800px;
  }

  .container {
    height: 100vh;
    display: flex;
    align-items: center;

    .slogan {
      position: relative;
      z-index: 2;

      h5 {
        font-weight: 400;
        color: #a15d4b;
        font-size: 18px;
      }
      
      h1 {
        font-family: 'Open Sans', sans-serif;
        letter-spacing: -1px;
        font-weight: 900;
        font-size: 90px;
        color: #532e24;
        margin-left: -7px;
        position: relative;
      }

      h4 {
        font-weight: 800;
        font-size: 60px;
        color: #a15d4b;
      }

      p {
        width: 500px;
        max-width: 100%;
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 50px;
      }
    }
  }
</style>