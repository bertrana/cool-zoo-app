<script>
import { RouterView } from 'vue-router';
import MainHeader from "./components/MainHeader.vue";


export default {
  name: "App",
  components: {
    MainHeader,
  }
}
</script>

<template>
  <MainHeader></MainHeader>
  <RouterView></RouterView>
</template>

<style></style>