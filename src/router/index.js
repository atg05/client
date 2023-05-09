import Profile from "../views/authorised/profile/index.vue";
import VueRouter from "vue-router";

const routes = [{ component: Profile, path: "/" }];

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
