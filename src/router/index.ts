import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/auth/Register.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/dashboard/Index.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("token") !== null;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth && !isLoggedIn) {
    // next("/login");
    next();
  } else if (to.path === "/login" && isLoggedIn) {
    //   next("/dashboard");
    next();
  } else {
    next();
  }
});

export default router;
