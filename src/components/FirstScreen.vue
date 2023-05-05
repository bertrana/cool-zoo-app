<script>
export default {
  name: "FirstScreen",
}
</script>

<template>
  <section class="first-screen">
    <div class="container">
      <h2 class="first-screen__header">
        Watch your favorite animal online
      </h2>
      <a href="#zoos" class="button button--watch">Watch online</a>
    </div>
    <ul class="container first-screen__social social">
      <li class="social__item social__item--inst">
        <a class="visually-hidden" href="instagram.com">Instagram</a>
      </li>
      <li class="social__item social__item--tw">
        <a class="visually-hidden" href="twitter.com">Twitter</a>
      </li>
      <li class="social__item social__item--yt">
        <a class="visually-hidden" href="youtube.com">Youtube</a>
      </li>
      <li class="social__item social__item--vk">
        <a class="visually-hidden" href="vk.ru">Vkontakte</a>
      </li>
    </ul>
  </section>
</template>