<script setup>
import { ref } from "vue";

const props = defineProps({
  imageUrl: {
    type: String,
    default: "../../assets/images/blog/img-post.jpg",
  },
  title: {
    type: String,
    default: "Fotografia Fine Art",
  },
  author: {
    type: String,
    default: "Karen Pinheiro",
  },
  date: {
    type: String,
    default: "15/11/2021",
  },
  resume: {
    type: String,
    default:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A velit penatibus phasellus tellus congue viverra in. Morbi etiam aliquet rhoncus velit, sed enim mauris. Quam in a, arcu ac vitae sit. Velit, cras quis et faucibus vulputate non purus.",
  },
});
</script>

<template>
  <div class="cmp-blog-card">
    <img
      src="../../assets/images/blog/img-post.jpg"
      :alt="title"
      class="cmp-blog-card__image"
    />
    <h1 class="cmp-blog-card__title">{{ title }}</h1>
    <span class="cmp-blog-card__author"> {{ author }} - {{ date }} </span>
    <p class="cmp-blog-card__resume">
      {{ resume }}
    </p>
  </div>
</template>

<style lang="scss">
@import "../../assets/scss/variables";

.cmp-blog-card {
  width: 100%;
  max-width: 40.625rem;
  padding-bottom: 2rem;

  &::after {
    display: block;
    content: "**********";
    font-family: $font-family;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: 0.5em;
    color: $font-color;
    text-align: center;
  }

  &__image {
    width: 100%;
    max-width: 630px;
    height: auto;
  }

  &__title {
    font-family: $font-family;
    font-style: normal;
    font-weight: 700;
    font-size: 1.625rem;
    line-height: 2rem;
    letter-spacing: 0.1em;
    color: $font-color;
    padding-top: 1rem;
    margin: 0;
  }

  &__author {
    display: block;
    font-family: $font-family;
    font-style: normal;
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 1rem;
    letter-spacing: 0.1em;
    color: $font-color;
    padding: 0.25rem 0 10px;
  }

  &__resume {
    font-family: $font-family;
    font-style: normal;
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.1em;
    color: $font-color;
    text-align: justify;
  }
}
</style>
