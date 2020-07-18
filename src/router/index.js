import Vue from 'vue'
import VueRouter from 'vue-router'
import movie from "./movie/movie"
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:"/movie"
  },
  movie,
  {
    name:"cinema",
    path:"/cinema",
    component:()=>import("@/views/cinema/cinema.vue")
  },
  {
    name:"mine",
    path:"/mine",
    component:()=>import("@/views/mine/mine.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
