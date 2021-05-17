import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  _RouteLocationBase,
  NavigationGuardNext,
} from "vue-router";
import SignIn from "@/views/SignIn.vue";
import Home from "@/views/Home.vue";
import Lifes from "@/views/Lifes.vue";
import Profile from "@/views/Profile.vue";
import store from "@/store";

const handleBeforeEnter = (
  to: _RouteLocationBase,
  _: _RouteLocationBase,
  next: NavigationGuardNext
) => {
  store.state.name = to.name;
  next();
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: SignIn,
    beforeEnter: handleBeforeEnter,
  },
  {
    path: "/home",
    name: "홈",
    component: Home,
    beforeEnter: handleBeforeEnter,
  },
  {
    path: "/life",
    name: "동네생활",
    component: Lifes,
    beforeEnter: handleBeforeEnter,
  },
  {
    path: "/profile",
    name: "프로필",
    component: Profile,
    beforeEnter: handleBeforeEnter,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
