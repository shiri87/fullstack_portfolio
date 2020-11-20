import Vue from 'vue';
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Lab from "../components/Lab.vue";
import Guest from "../components/Guest.vue";
import Project from "../components/Project.vue";
import Register from "../components/Register.vue";
import Login from '../components/Login.vue'
import AddLabProject from '../components/AddLabProject.vue'
import LabDetail from '../components/LabDetail.vue'
import EditLabProject from '../components/EditLabProject.vue'
import AddGuestbook from '../components/AddGuestbook.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/project",
    name: "project",
    component: Project,
  },
  {
    path: "/lab",
    name: "lab",
    component: Lab,
  },
  {
    path: "/lab/add",
    name: "AddLabProject",
    component: AddLabProject,
  },
  {
    path: "/lab/:labProjectId",
    name: "LabDetail",
    component: LabDetail,
  },
  {
    path: "/lab/:labProjectId/edit",
    name: "EditLabProject",
    component: EditLabProject,
  },
  {
    path: "/guest",
    name: "guest",
    component: Guest,
  },
  {
    path: "/guest/add",
    name: "AddGuestbook",
    component: AddGuestbook,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },  
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },

]
          
const router = new VueRouter({
  routes,
})

export default router
