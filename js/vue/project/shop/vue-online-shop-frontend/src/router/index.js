import Vue from 'vue'
import Router from 'vue-router'

// 路由级别组件
import Home from '@/pages/Home.vue'
import Cart from '@/pages/Cart.vue'

// Admin
import Index from '@/pages/admin/Index.vue'
import New from '@/pages/admin/New.vue'
import Products from '@/pages/admin/Products.vue'
import Edit from '@/pages/admin/Edit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: '',
          name: 'Products',
          component: Products
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        },
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
  ]
})
