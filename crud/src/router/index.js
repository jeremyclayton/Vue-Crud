import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import Book from '../components/Book.vue'

export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '/book',
      component: Book
  }]
});
