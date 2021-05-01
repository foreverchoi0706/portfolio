import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Document from "@/views/Document.vue";
import Profile from "@/views/Profile.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/document",
    component: Document,
  },
  {
    path: "/profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
