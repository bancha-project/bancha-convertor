import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import Home from "./pages/Home.vue"
import Sql from "./pages/Sql.vue"
import Base64 from "./pages/Base64.vue"
import Case from "./pages/Case.vue"
import Contact from "./pages/Contact.vue"
import About from "./pages/About.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/sql', component: Sql },
  { path: '/base64', component: Base64 },
  { path: '/case', component: Case },
  { path: '/contact', component: Contact },
  { path: '/about', component: About },
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
