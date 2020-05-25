import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "checkin | antoni_",
      metaTags: [
        {
          name: "description",
          content: "checkin when you arrive in the building"
        },
        {
          property: "og:description",
          content: "checkin when you arrive in the building"
        }
      ]
    }
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
