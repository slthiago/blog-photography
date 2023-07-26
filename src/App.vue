<script setup>
import Sidebar from "./components/sidebar/Sidebar.vue";
import Footer from "./components/footer/Footer.vue";
import BlogCard from "./components/blog-card/BlogCard.vue";
</script>

<template>
  <div class="cmp-app">
    <div class="container">
      <div class="row cmp-app__content">
        <div class="cmp-app__sidebar col-md-3">
          <Sidebar />
        </div>

        <div class="col-md-8 cmp-app__content">
          <RouterView />
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/variables";

.cmp-app {
  &__sidebar {
    display: flex;
    justify-content: flex-end;
  }

  &__content {
    padding: 0 0 2rem 2rem !important;
  }

  &__content {
    min-height: 78vh;
  }
}
</style>
