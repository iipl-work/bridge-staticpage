import { createRouter, createWebHistory } from 'vue-router'
import home from "../components/home.vue"
import AboutUs from "../components/aboutus.vue"
import ContactUs from "../components/contactUs.vue"
import single from "../components/single.vue"


const routes = [
  {
    path: '/',
    name: 'App',
    component: home
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/single',
    name: 'single',
    component: single
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactUs
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
 