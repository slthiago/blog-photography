<script setup>
import { computed } from "vue";
import Separator from "../separator/Separator.vue";

const props = defineProps({
  footerText: {
    type: String,
    default: "Todos os direitos reservados @",
  },
  copyright: {
    type: String,
    default: "Feito com ♡ e Vue.js por Thiago Santos",
  },
});

const date = new Date();
const yearActual = computed(() => {
  return date.getFullYear();
});
</script>

<template>
  <div class="cmp-footer">
    <Separator />

    <div class="cmp-footer__content">
      <span class="cmp-footer__content--text">
        {{ footerText }} {{ yearActual }}</span
      >
      <span class="cmp-footer__content--copyright"> {{ copyright }}</span>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/scss/variables";

.cmp-footer {
  padding-bottom: 1rem;
  margin-top: 4rem;
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0.375rem 0;

    &--text,
    &--copyright {
      font-family: $font-family;
      font-style: normal;
      font-weight: 300;
      font-size: 0.875rem;
      line-height: 1rem;
      letter-spacing: 0.1em;
      color: $font-color;
      padding: 0.25rem 0;
    }
  }
}
</style>
