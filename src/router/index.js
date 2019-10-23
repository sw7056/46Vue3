import Vue from 'vue'
import Router from 'vue-router'
import B from "../views/B";
import A from "../views/A";
import C from "../components/C";
import D from "../components/D"


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'A',
      component: A
    },
    {
      path: '/B',
      name: 'B',
      component: B
    },
    {
      path: '/C',
      name: 'C',
      component: C
    },
    {
      path: '/D',
      name: 'D',
      component: D
    }

]
})
