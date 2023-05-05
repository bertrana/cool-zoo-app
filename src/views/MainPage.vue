<script>
import { defineAsyncComponent } from 'vue';
import About from "../components/About.vue";
import Testimonials from "../components/Testimonials.vue";

export default {
  name: "MainPage",
  components: {
    FirstScreen: defineAsyncComponent(() => import("../components/FirstScreen.vue")),
    About,
    Testimonials
  }
}
</script>

<template>
  <main class="main-page">
    <FirstScreen></FirstScreen>
    <About></About>
    <Testimonials></Testimonials>
  </main>
</template>