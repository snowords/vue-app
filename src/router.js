import Vue from 'vue'
import Router from 'vue-router'
// router.js 从总的包中引入 Router
import Home from './views/Home'
// import About from './views/About'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // component: About,
            component: () => import('./views/About')
            // 更推荐懒加载的方式 ，可以优化页面
        }
    ]
})

