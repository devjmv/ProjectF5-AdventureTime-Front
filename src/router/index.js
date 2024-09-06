import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";
import DashboardLayout from "../layouts/DashboardLayout.vue";
import HomeView from "../views/HomeView.vue";
import DashboardView from "../views/DashboardView.vue";
import EventView from "../views/EventView.vue";
import RegisterView from "../views/RegisterView.vue";
import Forms from "../views/Forms.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/event",
      name: "event",
      component: EventView,
      meta: { requiresAuth: true },
    },
    {
      path: "/admin",
      component: DashboardLayout,
      meta: { requiresAuth: true, requiresAuthAdmin: true },
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: DashboardView,
        },
        {
          path: "forms",
          name: "forms",
          component: Forms,
        },
      ],
    }
  ],
});

router.beforeEach((to, from) => {
  const store = useAuthStore();

  if (localStorage.getItem("username") && store.user.username == "") {
    store.user.id = localStorage.getItem("id");
    store.user.username = localStorage.getItem("username");
    store.user.role = localStorage.getItem("role");
    store.user.isAuthenticated = localStorage.getItem("isAuthenticated") == "true" ? true : false;
    store.user.token = localStorage.getItem("token");
  }

  if (to.meta.requiresAuthAdmin && !(store.user.role == "ROLE_ADMIN")) {
    return {
      path: "/home",
    };
  }

  if (to.meta.requiresAuth && !store.user.isAuthenticated) {
    return {
      path: "/home",
    };
  }
});

export default router;
