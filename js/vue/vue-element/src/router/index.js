import Vue from 'vue'
import Router from 'vue-router';
import Home from '../views/Home';
import home1 from '../views/home1';
import home2 from '../views/home2';
import About from '../views/About';
import Detail from '@/views/Detail';

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          component: home1,
        },
        {
          path: 'home1',
          component: home1,
        },
        {
          path: 'home2',
          component: home2,
        },
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      beforeEnter: (to, from, next) => {
        next()
      }
    },
    {
      path: '/detail',
      // path: '/detail/:id',
      // name: '张三',
      name: 'Detail',
      component: Detail,
      // redirect: '/login'
    },
  ]
})
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   }
// ]
// const router = new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router