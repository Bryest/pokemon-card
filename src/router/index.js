import { createRouter, createWebHistory } from "vue-router";
import CardsView from "../views/CardsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: {
        name: "cards-view",
      },
    },
    {
      path: "/cards-view",
      name: "cards-view",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CardsView,
    },
  ],
});

export default router;
