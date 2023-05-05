<script>
export default {
  name: "MainHeader",
}
</script>


<template>
  <header class="main-header container">
    <h1 class="visually-hidden">Zoo</h1>
    <a href="/" class="main-header__logo logo"></a>
    <nav class="main-header__nav nav">
      <ul class="nav__list">
        <li class="nav__item nav__item--current">
          <RouterLink :to="{ name: 'main' }">About</RouterLink>
        </li>
        <li class="nav__item">
          <RouterLink :to="{ name: 'zoo' }">Zoo</RouterLink>
        </li>
        <li class="nav__item">
          <a>Map</a>
        </li>
        <li class="nav__item">
          <a>Contact us</a>
        </li>
        <li class="nav__item">
          <a>Design</a>
        </li>
      </ul>
    </nav>
    <div class="main-header__theme-toggle theme-toggle">
      <input type="checkbox" name="theme-toggle" id="theme-toggle" />
      <label class="visually-hidden" for="theme-toggle">Theme toggle</label>
    </div>
  </header>
</template>