import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  _RouteLocationBase,
  NavigationGuardNext,
} from "vue-router";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Life from "@/views/Life.vue";
import LifeDetail from "@/views/LifeDetail.vue";
import Profile from "@/views/Profile.vue";
import NotFound from "@/views/NotFound.vue";
import store from "@/store";

const handleBeforeEnter = (
  to: _RouteLocationBase,
  from: _RouteLocationBase,
  next: NavigationGuardNext
) => {
  console.log(to);
  console.log(from);
  store.state.name = to.name;
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
    name: "홈",
    component: Home,
    beforeEnter: handleBeforeEnter,
  },
  {
    path: "/life",
    name: "동네생활",
    component: Life,
    beforeEnter: handleBeforeEnter,
  },
  {
    path: "/life/:id",
    component: LifeDetail,
    beforeEnter: handleBeforeEnter,
  },
  {
    path: "/profile",
    name: "프로필",
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
