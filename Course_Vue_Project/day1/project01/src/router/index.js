//1.从vue-router组件中，导入两个方法
import { createRouter, createWebHistory } from 'vue-router'
//2.导入自定义组件--这种导入方式会把js文件打包成一个文件，所以加载的时候会很慢，加载js会很慢
import HomeView from '../views/HomeView.vue'


//3.路由数组
const routes = [
  //第一个路由，根路径
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  //第二个路由，非根路径
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //这种导入方式是路由懒加载的方式：会把每一个组件打包成单独的一个js，只有当需要用到这个组件时，才会去下载js文件
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]
//4.创建路由器
const router = createRouter({
  // history: createWebHashHistory()  这里多了Hash之后会在链接上加#：http://localhost:8080/#/about
  //如果这里去掉了Hash这个词，上面导入的时候也需要同步去掉
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router