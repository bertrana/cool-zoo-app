<script>
export default {
  name: "Testimonials",
}
</script>

<template>
  <div class="testimonials">
    <h2 class="testimonials__header">Testimonials</h2>
    <div class="slider">
      <ul class="slider__list"></ul>
      <input type="range" name="" id="" min="1" max="8" value="2" />
    </div>
    <button class="button">Leave feedback</button>
  </div>
  <template class="user-card">
    <li class="slider__user-card">
      <img class="user-card__img" alt="" />
      <b class="user-card__name"></b>
      <p class="user-card__text"></p>
    </li>
  </template>
</template>