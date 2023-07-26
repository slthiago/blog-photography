<script setup>
import { ref } from "vue";

const nav = ref([
  {
    title: "Home",
    path: "/",
    active: true,
  },
  {
    title: "Bio",
    path: "/bio",
    active: false,
  },
  {
    title: "Galeria",
    path: "/galeria",
    active: false,
  },
  {
    title: "Produção Artistica",
    path: "/producao",
    active: false,
  },
  {
    title: "Contato",
    path: "/contato",
    active: false,
  },
]);

function activeItem(index) {
  nav.value.forEach((item) => {
    if (item.active) {
      item.active = false;
    }
  });
  nav.value[index].active = true;
}
</script>

<template>
  <div class="cmp-sidebar">
    <router-link to="/" class="logo" @click="activeItem(0)">
      <span>KAREN</span>
      <span>PINHEIRO</span>
    </router-link>
    <div class="menu-nav">
      <ul>
        <li
          v-for="(item, index) in nav"
          :key="index"
          :class="item.active ? 'active' : ''"
        >
          <router-link :to="item.path" @click="activeItem(index)">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/scss/variables";

.cmp-sidebar {
  position: fixed;
  .logo {
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: right;
    text-decoration: none;

    span {
      font-family: $font-family;
      font-style: normal;
      font-weight: 300;
      font-size: 2rem;
      line-height: 2.5rem;
      letter-spacing: 0.1em;
      color: $font-color;
    }

    span:last-child {
      font-weight: 600;
    }
  }

  .menu-nav {
    display: flex;
    align-items: end;
    justify-content: end;
    padding-top: 3rem;

    ul {
      display: inline-flex;
      flex-direction: column;
      gap: 1rem;

      li {
        list-style: none;
        text-align: right;

        a {
          font-family: $font-family;
          font-style: normal;
          font-weight: 300;
          font-size: 0.875rem;
          line-height: 1rem;
          color: $font-color;
          text-transform: uppercase;
          text-decoration: none;
          padding: 0.5rem 1rem;
        }
      }
      .active {
        a {
          border: 1px solid $font-color;
        }
      }
    }
  }
}
</style>
