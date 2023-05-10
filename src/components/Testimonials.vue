<script>
import { mapActions } from 'vuex';
import UserCard from './UserCard.vue';
import { store } from '../scripts/store.js';

export default {
  name: "Testimonials",
  components: { UserCard },
  data() {
    return {

    }
  },
  methods: {
    // ...mapActions({
    //   load: 'LOAD_USER_DATA',
    // })
  },
  computed: {
    getUsersList: () => store.state.userData,
  }
}
</script>

<template>
  <div class="testimonials">
    <h2 class="testimonials__header">Testimonials</h2>
    <div class="slider">
      <ul class="slider__list">
        <UserCard v-for="user in this.getUsersList" :key="user.id" />
      </ul>
      <input type="range" name="" id="" min="1" max="8" value="2" />
    </div>
    <button class="button">Leave feedback</button>
  </div>
</template>