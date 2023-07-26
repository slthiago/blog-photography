<script setup>
import { ref, computed } from "vue";
const images = ref([
  {
    index: 0,
    thumbPath: "http://localhost:5173/src/assets/images/galeria/thumb/01.jpeg",
    modalPath: "http://localhost:5173/src/assets/images/galeria/modal/01.jpg",
    alt: "Fotografia Fine Art",
  },
  {
    index: 1,
    thumbPath: "http://localhost:5173/src/assets/images/galeria/thumb/02.jpeg",
    modalPath: "http://localhost:5173/src/assets/images/galeria/modal/02.jpg",
    alt: "Fotografia Fine Art",
  },
  {
    index: 2,
    thumbPath: "http://localhost:5173/src/assets/images/galeria/thumb/03.jpeg",
    modalPath: "http://localhost:5173/src/assets/images/galeria/modal/03.jpg",
    alt: "Fotografia Fine Art",
  },
  {
    index: 3,
    thumbPath: "http://localhost:5173/src/assets/images/galeria/thumb/04.jpeg",
    modalPath: "http://localhost:5173/src/assets/images/galeria/modal/04.jpg",
    alt: "Fotografia Fine Art",
  },
  {
    index: 4,
    thumbPath: "http://localhost:5173/src/assets/images/galeria/thumb/05.jpeg",
    modalPath: "http://localhost:5173/src/assets/images/galeria/modal/05.jpg",
    alt: "Fotografia Fine Art",
  },
  {
    index: 5,
    thumbPath: "http://localhost:5173/src/assets/images/galeria/thumb/06.jpeg",
    modalPath: "http://localhost:5173/src/assets/images/galeria/modal/06.jpg",
    alt: "Fotografia Fine Art",
  },
  {
    index: 6,
    thumbPath: "http://localhost:5173/src/assets/images/galeria/thumb/07.jpeg",
    modalPath: "http://localhost:5173/src/assets/images/galeria/modal/07.jpg",
    alt: "Fotografia Fine Art",
  },
  {
    index: 7,
    thumbPath: "http://localhost:5173/src/assets/images/galeria/thumb/08.jpeg",
    modalPath: "http://localhost:5173/src/assets/images/galeria/modal/08.jpg",
    alt: "Fotografia Fine Art",
  },
  {
    index: 8,
    thumbPath: "http://localhost:5173/src/assets/images/galeria/thumb/09.jpeg",
    modalPath: "http://localhost:5173/src/assets/images/galeria/modal/09.jpg",
    alt: "Fotografia Fine Art",
  },
  {
    index: 9,
    thumbPath: "http://localhost:5173/src/assets/images/galeria/thumb/10.jpeg",
    modalPath: "http://localhost:5173/src/assets/images/galeria/modal/10.jpg",
    alt: "Fotografia Fine Art",
  },
  {
    index: 10,
    thumbPath: "http://localhost:5173/src/assets/images/galeria/thumb/11.jpeg",
    modalPath: "http://localhost:5173/src/assets/images/galeria/modal/11.jpg",
    alt: "Fotografia Fine Art",
  },
  {
    index: 11,
    thumbPath: "http://localhost:5173/src/assets/images/galeria/thumb/12.jpeg",
    modalPath: "http://localhost:5173/src/assets/images/galeria/modal/12.jpg",
    alt: "Fotografia Fine Art",
  },
  {
    index: 12,
    thumbPath: "http://localhost:5173/src/assets/images/galeria/thumb/13.jpeg",
    modalPath: "http://localhost:5173/src/assets/images/galeria/modal/13.jpg",
    alt: "Fotografia Fine Art",
  },
]);

const showModal = ref(false);
const imageModal = ref(0);

function openModal(index) {
  imageModal.value = index;
  showModal.value = true;
}
</script>

<template>
  <div class="cmp-gallery">
    <div class="cmp-gallery__container">
      <img
        v-for="image in images"
        :key="image.index"
        :src="image.thumbPath"
        :alt="image.alt"
        @click="openModal(image.index)"
        class="cmp-gallery__container--image"
      />
    </div>
  </div>
  <div v-if="showModal" class="cmp-modal">
    <button class="cmp-modal__btn-close" @click="showModal = false">X</button>
    <div class="cmp-modal__container">
      <img
        :src="images[imageModal].modalPath"
        :alt="images[imageModal].alt"
        class="cmp-modal__container--image"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/scss/variables";

.cmp-gallery {
  &__container {
    margin: 0 auto;
    width: 100%;
    max-width: 740px;
    columns: 3;

    &--image {
      width: 240px;
      float: left;
      break-inside: avoid;
      padding: 5px;
      cursor: pointer;
    }
  }
}

.cmp-modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0, 60%);

  &__btn-close {
    background: none;
    border: none;
    font-family: $font-family;
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: $font-color;
    position: absolute;
    top: 1.5rem;
    right: 2rem;
  }

  &__container {
    &--image {
      max-height: 90vh;
      height: 100%;
      max-width: 90vw;
      width: auto;
    }
  }
}
</style>
