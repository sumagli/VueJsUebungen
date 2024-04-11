import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Aufgabe-1",
      name: "Aufgabe-1",

      component: () => import("../views/Aufgabe-1-deklaratives-rendering.vue"),
    },
    {
      path: "/Aufgabe-2",
      name: "Aufgabe-2",
      component: () => import("../views/Aufgabe-2-reaktivitaet.vue"),
    },
    {
      path: "/Aufgabe-4",
      name: "Aufgabe-4",
      component: () =>
        import("../views/Aufgabe-4-komponenten-und-properties.vue"),
    },
    {
      path: "/Aufgabe-5",
      name: "Aufgabe-5",
      component: () => import("../views/Aufgabe-5-v-if.vue"),
    },
    {
      path: "/Aufgabe-6",
      name: "Aufgabe-6",
      component: () => import("../views/Aufgabe-6-v-for.vue"),
    },
    {
      path: "/Aufgabe-7",
      name: "Aufgabe-7",
      component: () => import("../views/Aufgabe-7-bedingtes-eventhandling.vue"),
    },
    {
      path: "/Aufgabe-8",
      name: "Aufgabe-8",
      component: () => import("../views/Aufgabe-8-emits.vue"),
    },
  ],
});

export default router;
