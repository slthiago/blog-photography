<script setup>
import BlogCard from "../components/blog-card/BlogCard.vue";
</script>

<template>
  <div>
    <BlogCard v-for="item in 4" :key="item" />
  </div>
</template>
