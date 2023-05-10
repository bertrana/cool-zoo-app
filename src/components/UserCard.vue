<script>
export default {
  name: "UserCard",
  props: {
    imgSrc: String,
    userName: String,
    cardText: String,
  }
}
</script>

<template>
  <li class="slider__user-card">
    <img class="user-card__img" alt="" :src="imgSrc" />
    <b class="user-card__name">{{ userName }}</b>
    <p class="user-card__text">{{ cardText }}</p>
  </li>
</template>