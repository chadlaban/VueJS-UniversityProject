import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  // sets the paths for other web pages for the web app //
    {
      path: '/',
      name: 'home-page',
      component: Home
    },
    {
      path: '/search',
      name: 'search-page',
      component: function () { 
        return import('./views/Search.vue')
      }
    },
    {
      path: '/category',
      name: 'category-page',
      component: function () { 
        return import('./views/Category.vue')
      }
    }
  ]
})
