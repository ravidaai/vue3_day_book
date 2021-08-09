// import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory } from "vue-router";
//import Home from '../views/Home.vue'
import UserLayout from "../layouts/UserLayout.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home.vue"),
    meta: { layout: DefaultLayout },
    //component: Home
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login.vue"),
    meta: { layout: DefaultLayout, title: "Login" },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/register.vue"),
    meta: { layout: DefaultLayout },
  },
  {
    path: "/forgot_password",
    name: "ForgotPassword",
    component: () => import("../views/Forgot_password.vue"),
    meta: { layout: DefaultLayout },
  },
  {
    path: "/company",
    name: "Company",
    component: () => import("../views/company/index.vue"),
    meta: { layout: UserLayout, title: "Company" },
  },
  {
    path: "/category",
    name: "Category",
    component: () => import("../views/category/index.vue"),
    meta: { layout: UserLayout, title: "Category" },
  },
  {
    path: "/daybook",
    name: "Daybook",
    component: () => import("../views/daybook/index.vue"),
    meta: { layout: UserLayout },
  },
  {
    path: "/help",
    name: "help",
    component: () => import("../views/Help.vue"),
    meta: { layout: UserLayout, title: "my dynamic title" },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: { layout: UserLayout },
  },

  {
    path: "/example",
    name: "example",
    component: import("../views/example.vue"),
    meta: { layout: DefaultLayout },
  },
  //redirect
  {
    path: "/all-jobs",
    redirect: "/example",
  },
  //catch all 404
  {
    path: "/:catchAll(.*)",
    name: "not_found",
    component: import("../views/404.vue"),
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: import("../views/jobDetails.vue"),
    props: true,
    meta: { layout: DefaultLayout },
  },
  {
    path: "/details/:id",
    name: "PostDetails",
    component: import("../components/details.vue"),
    props: true,
    meta: { layout: DefaultLayout },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((toRoute, fromRoute, next) => {
//   //if tile as meta is used
//   window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Home';
//   //window.document.title = process.env.VUE_APP_TITLE + " - "+ toRoute.name;
//   next();
// })

router.beforeEach((toRoute, from, next) => {
  const publicPages = ["/login", "/register", "/forgot_password"];
  const authRequired = !publicPages.includes(toRoute.path);
  const loggedIn = localStorage.getItem("user");
  //console.log(localStorage.getItem('user'));
  //page Title
  window.document.title =
    toRoute.meta && toRoute.meta.title ? toRoute.meta.title : "Home";

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
