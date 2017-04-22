import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(axios);
Vue.use(VueRouter)

import Book from '../components/pages/Book.vue'
import Books from '../components/pages/Books.vue'
import Edit from '../components/pages/Edit.vue'
import newBook from '../components/pages/newBook.vue'


export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '/book',
      component: Book
  },{
      path: '/books',
      component: Books
  },{
      path: '/edit',
      component: Edit
  },{
      path: '/newBook',
      component: newBook
  }
]
});
