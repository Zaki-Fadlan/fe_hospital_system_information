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
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFoundView.vue"),
  },
  {
    path: "/",
    component: () => import("@/components/layout/MainLayout.vue"), // Layout wrapper
    meta: { requiresAuth: true }, // protect entire group
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("../views/dashboard/Index.vue"),
      },
      {
        path: "datamaster",
        name: "Datamaster",
        component: () => import("../views/datamaster/Index.vue"),
      },
      {
        path: "datamaster/building",
        name: "Building",
        component: () => import("../views/datamaster/BuildingView.vue"),
      },
      {
        path: "datamaster/room",
        name: "Room",
        component: () => import("../views/datamaster/RoomView.vue"),
      },
      {
        path: "datamaster/bed",
        name: "Bed",
        component: () => import("../views/datamaster/BedView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("token") !== null;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  // if (requiresAuth && !isLoggedIn) {
  //   next("/login");
  // } else if ((to.path === "/login" || to.path === "/register") && isLoggedIn) {
  //   next("/dashboard");
  // } else {
  //   next();
  // }
  next();
});

export default router;
