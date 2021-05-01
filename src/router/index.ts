import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationRaw,
  RouteRecordRaw,
} from "vue-router";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Document from "@/views/Document.vue";
import Profile from "@/views/Profile.vue";
import NotFound from "@/views/NotFound.vue";

const handleBeforeEnter = (
  to: RouteLocationRaw,
  from: RouteLocationRaw,
  next: NavigationGuardNext
) => {
  console.log(to);
  console.log(from);
  next();
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Login,
    beforeEnter: handleBeforeEnter,
  },
  {
    path: "/home",
    component: Home,
    beforeEnter: handleBeforeEnter,
  },
  {
    path: "/document",
    component: Document,
    beforeEnter: handleBeforeEnter,
  },
  {
    path: "/profile",
    component: Profile,
    beforeEnter: handleBeforeEnter,
  },
  {
    path: "/*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
