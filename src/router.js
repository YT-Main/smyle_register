import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import register1 from './views/register1.vue'
import register2 from './views/register2.vue'
import main from './views/main.vue'
import survey from './views/survey.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register1',
      name: 'register1',
      component: register1
    },
    {
      path: '/register2',
      name: 'register2',
      component: register2
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/survey',
      name: 'survey',
      component: survey
    },
      ]
})
