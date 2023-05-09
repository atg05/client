import { createRouter, createWebHistory } from "vue-router";
import Feed from "./views/authorised/feed/index.vue";
import Profile from "./views/authorised/profile/index.vue";

export const routes = [
  { path: "/", component: Feed },
  { path: "/profile", component: Profile },
];

const router = createRouter({ history: createWebHistory, routes });

export default router;
