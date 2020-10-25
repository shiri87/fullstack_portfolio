import Vue from 'vue';
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Lab from "../components/Lab.vue";
import Guest from "../components/Project.vue";
import Project from "../components/Project.vue";
import Register from "../components/Register.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
  },
  {
    path: "/lab",
    name: "Lab",
    component: Lab,
  },
  {
    path: "/guest",
    name: "guest",
    component: Guest,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
]

const router = new VueRouter({
  routes,
})

export default router
