<script>
export default {
  name: "About",
}
</script>

<template>
  <section class="about">
    <div class="about__description">
      <h2 class="about__header">How it works?</h2>
      <p class="about__text">
        As a voice for wildlife, we are devastated by the impact of the 2020
        Australian bushfires on precious species and their habitat, and we
        are determined to assist in all aspects, including providing
        veterinary support and raising much-needed emergency funds. Zoo
        Online saves wildlife and inspires everyone to make conservation a
        priority in their lives. Animals have the right to a pain-free and
        happy life. They have equal claim to the resources of this planet,
        and deserve a life of dignity and compassion.As a voice for
        wildlife, we are devastated by the impact of the 2020 Australian
        bushfires on precious species and their habitat.
      </p>
      <div class="carousel">
        <img class="carousel__image" src="/assets/carousel-1.jpeg" alt="deers" width="790" height="323" />
        <div class="carousel__range-label">
          <label for="carousel">01/</label>
          <span>04</span>
        </div>
        <input class="carousel__range" type="range" name="carousel" id="carousel" min="1" max="4" value="1" />
      </div>
      <a href="#zoos" class="button button--watch">Watch online</a>
    </div>
  </section>
</template>
