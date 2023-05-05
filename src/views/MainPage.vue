<script>
import FirstScreen from "../components/FirstScreen.vue";
import About from "../components/About.vue";
import Testimonials from "../components/Testimonials.vue";

export default {
  name: "MainPage",
  components: {
    FirstScreen,
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