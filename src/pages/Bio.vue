<template>
  <div class="page-bio">
    <img src="../assets/images/bio/bio.png" alt="Bio" class="page-bio__image" />
    <h1 class="page-bio__title">Bio</h1>
    <p class="page-bio__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar at
      mattis id purus sagittis adipiscing vulputate amet sodales. Fermentum
      morbi montes, turpis eu facilisis vitae. Eget at sed adipiscing integer
      vel sit libero aliquam sed. Ut et sed id at et. Pulvinar cras ultricies
      ipsum quis leo maecenas ultrices. Orci, sapien, praesent pellentesque nibh
      lectus a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pulvinar at mattis id purus sagittis adipiscing vulputate amet sodales.
      Fermentum morbi montes, turpis eu facilisis vitae. Eget at sed adipiscing
      integer vel sit libero aliquam sed. Ut et sed id at et. Pulvinar cras
      ultricies ipsum quis leo maecenas ultrices. Orci, sapien, praesent
      pellentesque nibh lectus a.
    </p>
    <span>**********</span>
    <p class="page-bio__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar at
      mattis id purus sagittis adipiscing vulputate amet sodales. Fermentum
      morbi montes, turpis eu facilisis vitae. Eget at sed adipiscing integer
      vel sit libero aliquam sed. Ut et sed id at et. Pulvinar cras ultricies
      ipsum quis leo maecenas ultrices. Orci, sapien, praesent pellentesque nibh
      lectus a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pulvinar at mattis id purus sagittis adipiscing vulputate amet sodales.
      Fermentum morbi montes, turpis eu facilisis vitae. Eget at sed adipiscing
      integer vel sit libero aliquam sed. Ut et sed id at et. Pulvinar cras
      ultricies ipsum quis leo maecenas ultrices. Orci, sapien, praesent
      pellentesque nibh lectus a.
    </p>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/variables";

.page-bio {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 40.625rem;

  &__image {
    width: 100%;
    max-width: 13.75rem;
    height: auto;
    margin: 0 auto;
  }

  &__title {
    font-family: $font-family;
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.5rem;
    letter-spacing: 0.1em;
    color: $font-color;
    text-align: center;
    padding: 1rem 0;
    margin: 0;
  }

  &__text {
    font-family: $font-family;
    font-style: normal;
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.1em;
    color: $font-color;
    text-align: justify;
  }

  span {
    font-family: $font-family;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: 0.5em;
    color: $font-color;
    text-align: center;
  }
}
</style>
