<script>
import MainHeader from "./components/MainHeader.vue";
import FirstScreen from "./components/FirstScreen.vue";
import About from "./components/About.vue";
import Testimonials from "./components/Testimonials.vue";

export default {
  name: "App",
  components: {
    MainHeader,
    FirstScreen,
    About,
    Testimonials
  }
}
</script>

<template>
  <MainHeader></MainHeader>
  <main class="main-page">
    <FirstScreen></FirstScreen>
    <About></About>
    <Testimonials></Testimonials>
  </main>
</template>

<style></style>