import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";

const lazyLoad = (view) => import(`../pages/${view}.vue`);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/bio",
    name: "Bio",
    component: lazyLoad("Bio"),
  },
  {
    path: "/galeria",
    name: "Galeria",
    component: lazyLoad("Galeria"),
  },
  {
    path: "/producao",
    name: "Produção Artística",
    component: lazyLoad("Producao"),
  },
  {
    path: "/contato",
    name: "Contato",
    component: lazyLoad("Contato"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
